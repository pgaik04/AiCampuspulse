"use client";

import { useRouter } from "next/navigation";
import { Activity, ChevronLeft } from "lucide-react";
import ScoreGauge from "@/components/results/ScoreGauge";
import CategoryBreakdown from "@/components/results/CategoryBreakdown";
import ImprovementCard from "@/components/results/ImprovementCard";
import Button from "@/components/ui/Button";
import { getTier } from "@/lib/get-tier";
import {
  MOCK_OVERALL_SCORE,
  MOCK_CATEGORY_SCORES,
  MOCK_IMPROVEMENT_AREAS,
} from "@/lib/results-data";

export default function CareerScoreResultsPage() {
  const router = useRouter();
  const tier = getTier(MOCK_OVERALL_SCORE);

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col bg-white px-5 pb-6">
      <header className="flex items-center gap-2 pb-4 pt-6">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600"
        >
          <ChevronLeft size={16} />
        </button>
        <h1 className="text-base font-semibold text-slate-900">Career score &amp; results</h1>
        <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <Activity size={14} aria-hidden="true" />
        </div>
      </header>

      <div className="flex flex-col items-center">
        <ScoreGauge score={MOCK_OVERALL_SCORE} />
        <span className={`mt-3 rounded-full px-3 py-1 text-xs font-medium ${tier.bg} ${tier.text}`}>
          {tier.label}
        </span>
        <p className="mt-3 text-center text-sm text-slate-500">
          You&apos;re ahead of 68% of students who&apos;ve taken this assessment.
        </p>
      </div>

      <div className="mt-6">
        <CategoryBreakdown scores={MOCK_CATEGORY_SCORES} />
      </div>

      <div className="mt-5">
        <ImprovementCard items={MOCK_IMPROVEMENT_AREAS} />
      </div>

      <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
        <Button variant="outline" onClick={() => router.push("/quiz")}>
          Retake assessment
        </Button>
        <Button variant="primary" onClick={() => router.push("/results/report")}>
          See full report
        </Button>
      </div>
    </main>
  );
}
