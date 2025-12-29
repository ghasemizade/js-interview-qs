-- Create profiles table for user management
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  created_at timestamp with time zone default now()
);

-- Create quiz_attempts table to store quiz results
create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_type text not null,
  difficulty text not null,
  score integer not null,
  max_score integer not null,
  date date default current_date,
  answers jsonb not null,
  created_at timestamp with time zone default now()
);

-- Enable RLS on tables
alter table public.profiles enable row level security;
alter table public.quiz_attempts enable row level security;

-- Profiles policies
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- Quiz attempts policies
create policy "quiz_attempts_select_own"
  on public.quiz_attempts for select
  using (auth.uid() = user_id);

create policy "quiz_attempts_insert_own"
  on public.quiz_attempts for insert
  with check (auth.uid() = user_id);

create policy "quiz_attempts_delete_own"
  on public.quiz_attempts for delete
  using (auth.uid() = user_id);
