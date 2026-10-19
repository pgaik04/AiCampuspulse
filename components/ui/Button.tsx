import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-indigo-700 text-white hover:bg-indigo-800",
  accent: "bg-rose-500 text-white hover:bg-rose-600",
  outline: "border border-slate-200 text-slate-600 hover:bg-slate-50",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`flex-1 rounded-xl py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
