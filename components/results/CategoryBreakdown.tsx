import { CategoryScore } from "@/lib/types";
import { CATEGORY_META } from "@/lib/category-meta";

interface CategoryBreakdownProps {
  scores: CategoryScore[];
}

export default function CategoryBreakdown({ scores }: CategoryBreakdownProps) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-slate-900">Score breakdown</h2>
      <div className="space-y-3">
        {scores.map(({ category, score }) => {
          const meta = CATEGORY_META[category];
          return (
            <div key={category}>
              <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
                <span>{meta.label}</span>
                <span className="font-medium text-slate-900">{score}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div
                  className={`h-2 rounded-full ${meta.bar}`}
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
