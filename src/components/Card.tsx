import type { HTMLAttributes } from "react";
import { cn } from "@/components/cn";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-paper text-body text-ink",
        className,
      )}
      {...props}
    />
  );
}
