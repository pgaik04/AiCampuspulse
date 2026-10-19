export interface ScoreTier {
  label: string;
  bg: string;
  text: string;
}

export function getTier(score: number): ScoreTier {
  if (score >= 85) {
    return { label: "Highly prepared", bg: "bg-emerald-50", text: "text-emerald-700" };
  }
  if (score >= 60) {
    return { label: "Career ready", bg: "bg-indigo-50", text: "text-indigo-700" };
  }
  return { label: "Building foundation", bg: "bg-amber-50", text: "text-amber-700" };
}
