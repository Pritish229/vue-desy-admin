"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function ComponentsLayout({ children }) {
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth < 768;
  });
  const pathname = usePathname();

  // Auto-collapse sidebar on mobile when route changes
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setCollapsed(true);
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-base-200 relative">
      <Sidebar collapsed={collapsed} />

      {!collapsed && (
        <div
          className="fixed inset-x-0 bottom-0 top-16 bg-black/30 md:hidden z-30"
          onClick={() => setCollapsed(true)}
        />
      )}

      <div
        className={`flex-1 flex flex-col transition-[margin] duration-300 ease-in-out md:ml-20 ${
          !collapsed ? "md:ml-72" : ""
        }`}
      >
        <Navbar collapsed={collapsed} onToggleSidebar={() => setCollapsed((prev) => !prev)} />
        <main className="p-4 lg:p-6 flex-1 space-y-6 mt-16">{children}</main>
      </div>
    </div>
  );
}
