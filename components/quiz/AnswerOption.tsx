import { Check } from "lucide-react";

interface AnswerOptionProps {
  text: string;
  selected: boolean;
  onSelect: () => void;
}

export default function AnswerOption({ text, selected, onSelect }: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
        selected
          ? "border-indigo-600 bg-indigo-50 text-indigo-800"
          : "border-slate-200 text-slate-700 hover:border-slate-300"
      }`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          selected ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300"
        }`}
      >
        {selected && <Check size={12} />}
      </span>
      {text}
    </button>
  );
}
