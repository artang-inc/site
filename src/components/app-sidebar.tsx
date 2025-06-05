'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "BUKKAKE-1",
          url: "#",
        },
        {
          title: "BUKKAKE-2",
          url: "#",
        },
        {
          title: "BUKKAKE-3",
          url: "#",
        },
        {
          title: "BUKKAKE-4",
          url: "#",
        },
        {
          title: "BUKKAKE-5",
          url: "#",
        },
        {
          title: "BUKKAKE-6",
          url: "#",
        },
        {
          title: "BUKKAKE-7",
          url: "#",
        },
        {
          title: "BUKKAKE-8",
          url: "#",
        },
        {
          title: "BUKKAKE-9",
          url: "#",
        },
        {
          title: "BUKKAKE-10",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState<string>();

  const handleItemClick = (itemTitle: string) => {
    setActiveItem(itemTitle);
  };

  const goToFirstPage = () => {
    window.location.href = "/";

  };

  return (
    <Sidebar
      {...props}
      className="dark text-white"
      aria-label="Main navigation"
    >
      <SidebarHeader>
        <span>Artang</span>

        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* Each SidebarGroup corresponds to a main navigation category. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={activeItem === item.title}
                      onClick={() => handleItemClick(item.title)}
                    >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            <div className="h-64 flex flex-col justify-between p-2">
              <div className="h-px bg-muted my-2 mt-auto" />
              <button
                onClick={goToFirstPage}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors text-white mt-4"
              >
                Voltar a primeira pagina
              </button>
            </div>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />


      
    </Sidebar>
  );
}
