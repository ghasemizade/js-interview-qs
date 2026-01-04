export type Difficulty = "junior" | "mid" | "senior"

export interface Question {
  id: string
  difficulty: Difficulty
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const typescriptQuestions: Question[] = [
  // Junior Developer Questions
  {
    id: "ts-junior-1",
    difficulty: "junior",
    question: "What is TypeScript?",
    options: [
      "A runtime for JavaScript",
      "A superset of JavaScript that adds static typing",
      "A replacement for JavaScript",
      "A CSS preprocessor",
    ],
    correctAnswer: 1,
    explanation:
      "TypeScript is a superset of JavaScript that adds static typing. It compiles to plain JavaScript and provides features like type checking, interfaces, and enums to help catch errors during development.",
  },
  {
    id: "ts-junior-2",
    difficulty: "junior",
    question: "How do you declare a variable with a specific type in TypeScript?",
    options: ["var name = string", "let name: string", "const name<string>", "type name = string"],
    correctAnswer: 1,
    explanation:
      "In TypeScript, you use the colon (:) syntax to declare a variable with a type. For example, 'let name: string' declares a variable that can only hold string values.",
  },
  {
    id: "ts-junior-3",
    difficulty: "junior",
    question: "What is an interface in TypeScript?",
    options: [
      "A class that implements methods",
      "A way to define the structure of an object",
      "A function type",
      "A module",
    ],
    correctAnswer: 1,
    explanation:
      "An interface is a TypeScript construct that defines the structure or contract of an object. It specifies what properties and methods an object should have, allowing you to enforce consistency across your code.",
  },
  {
    id: "ts-junior-4",
    difficulty: "junior",
    question: "What does the 'any' type mean in TypeScript?",
    options: [
      "A type that can be any primitive type",
      "A type that disables type checking for a variable",
      "A type that represents null or undefined",
      "A type that represents multiple types",
    ],
    correctAnswer: 1,
    explanation:
      "The 'any' type disables type checking for a variable. While it can be useful for migrating JavaScript code, using 'any' reduces the benefits of TypeScript's type system and should generally be avoided.",
  },
  {
    id: "ts-junior-5",
    difficulty: "junior",
    question: "What is a union type in TypeScript?",
    options: [
      "A type that is a combination of two interfaces",
      "A type that can be one of several types",
      "A type that extends multiple classes",
      "A type that combines arrays and objects",
    ],
    correctAnswer: 1,
    explanation:
      "A union type allows a variable to be one of several types. You define it using the pipe (|) operator. For example, 'let value: string | number' means the variable can be either a string or a number.",
  },
  {
    id: "ts-junior-6",
    difficulty: "junior",
    question: "How do you make a property optional in a TypeScript interface?",
    options: ["property?", "property: optional", "?property", "property: undefined"],
    correctAnswer: 0,
    explanation:
      "You use a question mark (?) after the property name to make it optional. For example, 'interface User { name: string; age?: number }' makes the 'age' property optional.",
  },
  {
    id: "ts-junior-7",
    difficulty: "junior",
    question: "What is a type alias in TypeScript?",
    options: [
      "An alternative name for a built-in type",
      "A way to define a custom type using the 'type' keyword",
      "A copy of an interface",
      "A method to rename a class",
    ],
    correctAnswer: 1,
    explanation:
      "A type alias is created using the 'type' keyword and allows you to define custom types. For example, 'type ID = string | number' creates a type alias that can be reused throughout your code.",
  },
  {
    id: "ts-junior-8",
    difficulty: "junior",
    question: "What does the 'readonly' keyword do in TypeScript?",
    options: [
      "Makes a variable only readable in functions",
      "Prevents a property from being modified after initialization",
      "Makes a property hidden from outside the class",
      "Marks a property as deprecated",
    ],
    correctAnswer: 1,
    explanation:
      "The 'readonly' keyword prevents a property from being modified after it's initialized. It's useful for enforcing immutability and can be applied to class properties and interface properties.",
  },
  {
    id: "ts-junior-9",
    difficulty: "junior",
    question: "What is an enum in TypeScript?",
    options: [
      "A way to define a set of named constants",
      "A type of array",
      "A method for creating objects",
      "A way to define functions",
    ],
    correctAnswer: 0,
    explanation:
      "An enum is a way to define a set of named constants. It's useful when you have a fixed set of values. For example, 'enum Direction { Up, Down, Left, Right }' defines four named directions.",
  },
  {
    id: "ts-junior-10",
    difficulty: "junior",
    question: "How do you specify the return type of a function in TypeScript?",
    options: [
      "function myFunc() => string {}",
      "function myFunc(): string {}",
      "function myFunc() -> string {}",
      "function myFunc() string {}",
    ],
    correctAnswer: 1,
    explanation:
      "You use a colon (:) followed by the type after the function parameters. For example, 'function add(a: number, b: number): number { return a + b }' indicates the function returns a number.",
  },

  // Mid-Level Developer Questions
  {
    id: "ts-mid-1",
    difficulty: "mid",
    question: "What is a generic in TypeScript?",
    options: [
      "A type that can work with any value",
      "A type that allows you to create reusable components with type parameters",
      "A built-in type for arrays",
      "A type that extends another type",
    ],
    correctAnswer: 1,
    explanation:
      "Generics allow you to create reusable components that work with multiple types. You define a type parameter in angle brackets. For example, 'function identity<T>(arg: T): T { return arg }' works with any type.",
  },
  {
    id: "ts-mid-2",
    difficulty: "mid",
    question: "What is type narrowing in TypeScript?",
    options: [
      "The process of reducing the size of a type",
      "Using conditions to refine the type of a variable within a code block",
      "Converting one type to another",
      "Combining multiple types into one",
    ],
    correctAnswer: 1,
    explanation:
      "Type narrowing is when TypeScript refines the type of a variable based on code analysis. For example, in 'if (typeof value === \"string\") { value.toUpperCase() }', TypeScript narrows the type to string inside the if block.",
  },
  {
    id: "ts-mid-3",
    difficulty: "mid",
    question: "What is the 'keyof' operator in TypeScript?",
    options: [
      "A way to loop through object keys",
      "An operator that returns the union of property names of a type",
      "A method to get the key from a value",
      "A way to define object keys",
    ],
    correctAnswer: 1,
    explanation:
      "The 'keyof' operator returns a union of all property names of a type. For example, if 'interface User { name: string; age: number }', then 'keyof User' is equivalent to 'name' | 'age'.",
  },
  {
    id: "ts-mid-4",
    difficulty: "mid",
    question: "What is a conditional type in TypeScript?",
    options: [
      "A type that depends on a runtime condition",
      "A type that is selected based on a condition, similar to a ternary operator",
      "A type that has optional properties",
      "A type that is deprecated conditionally",
    ],
    correctAnswer: 1,
    explanation:
      "A conditional type selects one type or another based on a condition. The syntax is 'T extends U ? X : Y'. For example, 'type IsString<T> = T extends string ? true : false' checks if T is a string.",
  },
  {
    id: "ts-mid-5",
    difficulty: "mid",
    question: "What are mapped types in TypeScript?",
    options: [
      "Types that are stored in a map structure",
      "Types that transform properties of an existing type into new types",
      "Types that are used for mapping objects",
      "Types for creating arrays",
    ],
    correctAnswer: 1,
    explanation:
      "Mapped types allow you to transform an existing type by iterating over its properties. For example, 'type Readonly<T> = { readonly [K in keyof T]: T[K] }' creates a read-only version of type T.",
  },
  {
    id: "ts-mid-6",
    difficulty: "mid",
    question: "What is the 'extends' keyword used for in TypeScript?",
    options: [
      "Only for class inheritance",
      "To specify constraints on generics and to inherit from classes or interfaces",
      "To add new properties to a type",
      "To create a copy of a type",
    ],
    correctAnswer: 1,
    explanation:
      "The 'extends' keyword is used for both inheritance and constraints. In generics, it constrains the type parameter. For example, 'function getLength<T extends { length: number }>(arg: T)' requires T to have a length property.",
  },
  {
    id: "ts-mid-7",
    difficulty: "mid",
    question: "What is the difference between 'interface' and 'type'?",
    options: [
      "They are identical",
      "Interfaces are for classes, types are for objects",
      "Interfaces can be merged and extended, types use intersection for combination",
      "Types are more powerful",
    ],
    correctAnswer: 2,
    explanation:
      "Interfaces can be merged (declaration merging) and use 'extends' for extension. Types use intersection (&) for combining types and are more flexible for unions and tuples. Choose based on your use case.",
  },
  {
    id: "ts-mid-8",
    difficulty: "mid",
    question: "What is the 'infer' keyword in TypeScript?",
    options: [
      "A way to guess the type of a variable",
      "A keyword used in conditional types to introduce a type variable",
      "A method to convert types",
      "A way to define default types",
    ],
    correctAnswer: 1,
    explanation:
      "The 'infer' keyword is used in conditional types to declare a type variable. For example, 'type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never' extracts the return type of a function.",
  },
  {
    id: "ts-mid-9",
    difficulty: "mid",
    question: "What are decorators in TypeScript?",
    options: [
      "A way to add comments to code",
      "Functions that modify classes, methods, or properties at design time",
      "A pattern for creating objects",
      "CSS styling features",
    ],
    correctAnswer: 1,
    explanation:
      "Decorators are functions that can modify classes, methods, or properties. They are denoted by @ and are commonly used in frameworks like Angular. They allow you to add metadata and functionality to your code.",
  },
  {
    id: "ts-mid-10",
    difficulty: "mid",
    question: "What is the 'Partial<T>' utility type?",
    options: [
      "A type for partial objects",
      "A utility type that makes all properties of T optional",
      "A type that removes some properties",
      "A type for partial functions",
    ],
    correctAnswer: 1,
    explanation:
      "Partial<T> is a built-in utility type that makes all properties of type T optional. For example, 'Partial<User>' would make all properties of User optional, useful for update operations.",
  },

  // Senior Developer Questions
  {
    id: "ts-senior-1",
    difficulty: "senior",
    question: "What is the difference between 'Readonly' and 'readonly'?",
    options: [
      "They are the same",
      "'readonly' is a property modifier, 'Readonly' is a utility type",
      "'Readonly' only works on interfaces",
      "'readonly' is deprecated",
    ],
    correctAnswer: 1,
    explanation:
      "'readonly' is a property modifier used in interfaces and classes. 'Readonly<T>' is a utility type that makes all properties of T readonly. Both enforce immutability but at different levels.",
  },
  {
    id: "ts-senior-2",
    difficulty: "senior",
    question: "What is the 'ThisType<T>' utility type used for?",
    options: [
      "To define the type of 'this' in an object",
      "To check if a value is of type T",
      "To create a new type based on this",
      "To bind 'this' to a function",
    ],
    correctAnswer: 0,
    explanation:
      "ThisType<T> provides context type for 'this' in an object literal. It's useful when you want TypeScript to understand the context of 'this' within object methods without explicit annotation.",
  },
  {
    id: "ts-senior-3",
    difficulty: "senior",
    question: "What is template literal types in TypeScript?",
    options: [
      "A way to create string templates",
      "A feature that allows string union types to be manipulated like templates",
      "A method for creating template functions",
      "A way to define templates for objects",
    ],
    correctAnswer: 1,
    explanation:
      "Template literal types use template literal syntax to create union types. For example, 'type EventName = `on${Capitalize<Key>}` creates event handler names. They're powerful for creating precise type-safe APIs.",
  },
  {
    id: "ts-senior-4",
    difficulty: "senior",
    question: "What is the 'Record<K, T>' utility type?",
    options: [
      "A type for recording data",
      "A utility type that creates an object type with properties of type K and values of type T",
      "A type for database records",
      "A type for recording functions",
    ],
    correctAnswer: 1,
    explanation:
      "Record<K, T> constructs an object type where keys are of type K and values are of type T. For example, 'Record<\"admin\" | \"user\", Permission>' creates an object with 'admin' and 'user' keys.",
  },
  {
    id: "ts-senior-5",
    difficulty: "senior",
    question: "What is the 'Omit<T, K>' utility type?",
    options: [
      "A type that hides properties",
      "A utility type that creates a type by omitting specific properties from T",
      "A type for skipping validation",
      "A type for ignoring errors",
    ],
    correctAnswer: 1,
    explanation:
      "Omit<T, K> constructs a type by removing the properties specified in K from T. For example, 'Omit<User, \"password\">' creates a User type without the password property, useful for API responses.",
  },
  {
    id: "ts-senior-6",
    difficulty: "senior",
    question: "What is variance in TypeScript types?",
    options: [
      "The difference between type values",
      "How type relationships behave with subtyping (covariance, contravariance, invariance)",
      "The changes made to a type",
      "The range of a type",
    ],
    correctAnswer: 1,
    explanation:
      "Variance describes how type relationships work. Covariance allows subtypes, contravariance allows supertypes, and invariance requires exact matches. Understanding variance is crucial for advanced generic programming.",
  },
  {
    id: "ts-senior-7",
    difficulty: "senior",
    question: "What is the 'unknown' type and how does it differ from 'any'?",
    options: [
      "They are identical",
      "'unknown' is type-safe and requires type checking before use, while 'any' bypasses type checking",
      "'unknown' is deprecated",
      "'any' is more restrictive",
    ],
    correctAnswer: 1,
    explanation:
      "'unknown' is a type-safe counterpart to 'any'. While 'any' disables type checking, 'unknown' requires you to check or assert the type before using it, maintaining type safety.",
  },
  {
    id: "ts-senior-8",
    difficulty: "senior",
    question: "What is the 'Extract<T, U>' utility type?",
    options: [
      "A way to extract data from objects",
      "A utility type that extracts from T those types that are assignable to U",
      "A method to pull out values",
      "A type for extracting properties",
    ],
    correctAnswer: 1,
    explanation:
      'Extract<T, U> constructs a type by extracting from T all types that are assignable to U. For example, \'Extract<"a" | "b" | "c", "a" | "f">\' results in \'a\'. It\'s useful for filtering union types.',
  },
  {
    id: "ts-senior-9",
    difficulty: "senior",
    question: "What is the 'Exclude<T, U>' utility type?",
    options: [
      "A type that excludes nothing",
      "A utility type that excludes from T all types that are assignable to U",
      "A type for hiding properties",
      "A way to prevent type checking",
    ],
    correctAnswer: 1,
    explanation:
      "Exclude<T, U> constructs a type by excluding from T all types assignable to U. For example, 'Exclude<\"a\" | \"b\" | \"c\", \"a\">'' results in 'b' | 'c'. It's the opposite of Extract.",
  },
  {
    id: "ts-senior-10",
    difficulty: "senior",
    question: "What is module augmentation in TypeScript?",
    options: [
      "A way to create modules",
      "A technique to extend existing module definitions with new functionality",
      "A method for importing modules",
      "A way to compress modules",
    ],
    correctAnswer: 1,
    explanation:
      "Module augmentation allows you to extend existing module declarations. You use 'declare module' to add new types or properties to existing modules, useful for adding types to third-party libraries.",
  },
]
