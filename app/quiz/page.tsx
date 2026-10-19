"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Activity, ChevronLeft } from "lucide-react";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuestionCard from "@/components/quiz/QuestionCard";
import Button from "@/components/ui/Button";
import { QUIZ_QUESTIONS } from "@/lib/quiz-data";

export default function CareerReadinessQuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | null>>(
    Object.fromEntries(QUIZ_QUESTIONS.map((q) => [q.id, null]))
  );

  const question = QUIZ_QUESTIONS[currentIndex];
  const isLast = currentIndex === QUIZ_QUESTIONS.length - 1;
  const isAnswered = answers[question.id] !== null;

  const handleSelect = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  };

  const handleSubmit = async () => {
    // TODO (US-08): POST `answers` to the Career Assessment API, then route
    // to /results once the response comes back, e.g.
    // await fetch("/api/assessment/submit", {
    //   method: "POST",
    //   body: JSON.stringify(answers),
    // });
    router.push("/results");
  };

  const handleNext = () => {
    if (isLast) {
      handleSubmit();
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

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
        <h1 className="text-base font-semibold text-slate-900">Career readiness quiz</h1>
        <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <Activity size={14} aria-hidden="true" />
        </div>
      </header>

      <QuizProgress total={QUIZ_QUESTIONS.length} current={currentIndex} />

      <QuestionCard
        question={question}
        questionNumber={currentIndex + 1}
        totalQuestions={QUIZ_QUESTIONS.length}
        selectedOptionId={answers[question.id]}
        onSelect={handleSelect}
      />

      <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
        <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </Button>
        <Button
          variant={isLast ? "accent" : "primary"}
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {isLast ? "Submit assessment" : "Next"}
        </Button>
      </div>
    </main>
  );
}
