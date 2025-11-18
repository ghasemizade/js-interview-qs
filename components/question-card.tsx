'use client';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onSelectAnswer: (index: number) => void;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
}: QuestionCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedAnswer === index
                ? 'border-primary bg-primary/5'
                : 'border-input bg-card hover:border-border'
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={index}
              checked={selectedAnswer === index}
              onChange={() => onSelectAnswer(index)}
              className="w-4 h-4 cursor-pointer accent-primary"
            />
            <span className="ml-3 text-foreground text-sm md:text-base">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
