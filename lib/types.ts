export type Category = "technical" | "soft" | "aptitude";

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  category: Category;
  prompt: string;
  options: QuizOption[];
}

export interface CategoryScore {
  category: Category;
  score: number; // 0-100
}

export interface ImprovementArea {
  title: string;
  tip: string;
}
