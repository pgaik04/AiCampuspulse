import { Activity } from "lucide-react";

interface QuizProgressProps {
  total: number;
  current: number; // 0-indexed
}

export default function QuizProgress({ total, current }: QuizProgressProps) {
  return (
    <div className="mb-6 flex items-center gap-2">
      <div className="flex flex-1 gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i <= current ? "bg-rose-500" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
      <Activity size={16} className="shrink-0 text-rose-500" aria-hidden="true" />
    </div>
  );
}
