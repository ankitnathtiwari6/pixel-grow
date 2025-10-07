import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-border bg-card p-6 backdrop-blur-sm",
        glow &&
          "glow hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
