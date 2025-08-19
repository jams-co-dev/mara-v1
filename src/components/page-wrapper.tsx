"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PageWrapper({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("fade-in-animation", className)}>{children}</div>;
}
