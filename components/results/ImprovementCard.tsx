import { Clock, Mic, FileText, type LucideIcon } from "lucide-react";
import { ImprovementArea } from "@/lib/types";

const ICONS: LucideIcon[] = [Clock, Mic, FileText];

interface ImprovementCardProps {
  items: ImprovementArea[];
}

export default function ImprovementCard({ items }: ImprovementCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">Areas for improvement</h2>
      <div className="space-y-3">
        {items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={item.title} className="flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500">
                <Icon size={15} aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">{item.title}</p>
                <p className="text-xs leading-snug text-slate-500">{item.tip}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
