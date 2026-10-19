import { QuizQuestion } from "@/lib/types";
import { CATEGORY_META } from "@/lib/category-meta";
import AnswerOption from "./AnswerOption";

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedOptionId: string | null;
  onSelect: (optionId: string) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionId,
  onSelect,
}: QuestionCardProps) {
  const meta = CATEGORY_META[question.category];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${meta.badgeBg} ${meta.badgeText}`}
        >
          {meta.label}
        </span>
      </div>

      <p className="mb-4 text-lg font-semibold leading-snug text-slate-900">
        {question.prompt}
      </p>

      <div className="space-y-2.5">
        {question.options.map((opt) => (
          <AnswerOption
            key={opt.id}
            text={opt.text}
            selected={selectedOptionId === opt.id}
            onSelect={() => onSelect(opt.id)}
          />
        ))}
      </div>
    </div>
  );
}
