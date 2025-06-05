"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function BodyWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <body
      className={
        isHome
          ? "with-background"
          : "bg-[oklch(var(--background))] text-[oklch(var(--foreground))]"
      }
    >
      {children}
    </body>
  );
}
