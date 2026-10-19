import { CategoryScore, ImprovementArea } from "./types";

// TODO (US-09): replace these mocks with a call to the Score API, e.g.
// const { overall, breakdown, improvements } = await fetch(`/api/assessment/score/${userId}`).then(r => r.json());
export const MOCK_OVERALL_SCORE = 78;

export const MOCK_CATEGORY_SCORES: CategoryScore[] = [
  { category: "technical", score: 82 },
  { category: "soft", score: 71 },
  { category: "aptitude", score: 79 },
];

export const MOCK_IMPROVEMENT_AREAS: ImprovementArea[] = [
  {
    title: "Time management under pressure",
    tip: "Break deadlines into smaller checkpoints so pressure builds gradually, not all at once.",
  },
  {
    title: "Public speaking confidence",
    tip: "Join a campus club or mock-interview session to get comfortable thinking out loud.",
  },
  {
    title: "Resume keyword alignment",
    tip: "Match your resume bullet points to the language used in real job postings.",
  },
];
