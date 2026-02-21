import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({
    className,
    variant = "default",
    ...props
}: React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "sage" | "gold" | "outline";
}) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium transition-colors",
                {
                    "bg-primary/15 text-primary": variant === "default",
                    "bg-sage-100 text-sage-700": variant === "sage",
                    "bg-gold-100 text-gold-600": variant === "gold",
                    "border border-border text-muted-foreground": variant === "outline",
                },
                className
            )}
            {...props}
        />
    );
}

export { Badge };
