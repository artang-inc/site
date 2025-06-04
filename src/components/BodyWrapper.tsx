// src/components/BodyWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export function BodyWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDemo = pathname === "/demo";

  const content = isDemo ? (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <SidebarTrigger />
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  ) : (
    children
  );

  return <body className={isHome ? "with-background" : ""}>{content}</body>;
}
