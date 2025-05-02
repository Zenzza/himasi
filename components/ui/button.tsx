import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}


export const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl px-5 py-2 font-semibold transition-all",
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "outline" && "border border-blue-600 text-blue-600 hover:bg-blue-50",
        className
      )}
    >
      {children}
    </button>
  );
};
