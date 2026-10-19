import { Category } from "./types";

interface CategoryMeta {
  label: string;
  badgeBg: string;
  badgeText: string;
  bar: string;
}

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  technical: {
    label: "Technical",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    bar: "bg-indigo-600",
  },
  soft: {
    label: "Soft skills",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",
    bar: "bg-amber-500",
  },
  aptitude: {
    label: "Aptitude",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    bar: "bg-emerald-600",
  },
};
