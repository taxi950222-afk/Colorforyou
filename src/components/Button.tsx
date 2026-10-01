import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/components/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center rounded-[10px] border-0 bg-primary px-4 text-body font-medium text-on-primary transition-colors duration-150 hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-reduce:transition-none",
        className,
      )}
      {...props}
    />
  );
}
