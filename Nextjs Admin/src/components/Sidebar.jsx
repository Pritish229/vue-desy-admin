"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  Component,
  MousePointerClick,
  FormInput,
  LayoutGrid,
  Bell,
  Navigation,
  Columns,
  FileText,
  Sparkles,
  Monitor,
  Link2,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

const componentCategories = [
  {
    label: "Actions & Interactions",
    icon: MousePointerClick,
    basePath: "/components/actions",
    items: [
      { href: "/components/actions/button", label: "Button" },
      { href: "/components/actions/dropdown", label: "Dropdown" },
      { href: "/components/actions/modal", label: "Modal" },
      { href: "/components/actions/swap", label: "Swap" },
      { href: "/components/actions/theme-controller", label: "Theme Controller" },
      { href: "/components/actions/fab", label: "FAB / Speed Dial" },
      { href: "/components/actions/tooltip", label: "Tooltip" },
      { href: "/components/actions/validator", label: "Validator" },
    ],
  },
  {
    label: "Forms",
    icon: FormInput,
    basePath: "/components/forms",
    items: [
      { href: "/components/forms/input", label: "Text Input" },
      { href: "/components/forms/textarea", label: "Textarea" },
      { href: "/components/forms/checkbox", label: "Checkbox" },
      { href: "/components/forms/radio", label: "Radio" },
      { href: "/components/forms/toggle", label: "Toggle" },
      { href: "/components/forms/select", label: "Select" },
      { href: "/components/forms/file-input", label: "File Input" },
      { href: "/components/forms/range", label: "Range Slider" },
      { href: "/components/forms/rating", label: "Rating" },
      { href: "/components/forms/label", label: "Label" },
      { href: "/components/forms/fieldset", label: "Fieldset" },
      { href: "/components/forms/filter", label: "Filter" },
    ],
  },
];

export default function Sidebar({ collapsed }) {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState(() => {
    // Open the category that contains the current path
    const activeCategory = componentCategories.find((cat) =>
      pathname.startsWith(cat.basePath)
    );
    return activeCategory ? [activeCategory.basePath] : [];
  });

  const toggleCategory = (basePath) => {
    setOpenCategories((prev) =>
      prev.includes(basePath)
        ? prev.filter((p) => p !== basePath)
        : [...prev, basePath]
    );
  };

  return (
    <aside
      className={`bg-base-100 text-base-content border-r border-base-200 flex-shrink-0 overflow-hidden
      fixed inset-y-0 left-0 z-40 transform transition-[transform,width] duration-300 ease-in-out md:fixed md:inset-y-0 md:left-0 md:translate-x-0
      ${collapsed ? "-translate-x-full md:w-20" : "translate-x-0 w-72"}`}
    >
      <div className="flex items-center gap-3 px-4 py-4 border-b border-base-200">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-content font-bold">
          AD
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">Admin Panel</span>
            <span className="text-xs text-base-content/60">
              Next.js + DaisyUI
            </span>
          </div>
        )}
      </div>

      <nav className="menu flex flex-col flex-nowrap w-full p-2 pr-3 md:p-4 text-sm overflow-y-auto overflow-x-hidden max-h-[calc(100vh-80px)]">
        {/* Main Navigation */}
        {!collapsed && (
          <p className="menu-title text-xs uppercase tracking-wide text-base-content/60">
            Main
          </p>
        )}
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link href={item.href} className={active ? "active" : undefined}>
                <Icon className="h-4 w-4" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          );
        })}

        {/* Components Section */}
        {!collapsed && (
          <p className="menu-title text-xs uppercase tracking-wide text-base-content/60 mt-4">
            Components
          </p>
        )}
        {collapsed && <div className="divider my-2"></div>}


        {/* Category Dropdowns */}
        {componentCategories.map((category) => {
          const Icon = category.icon;
          const isOpen = openCategories.includes(category.basePath);
          const isActive = pathname.startsWith(category.basePath);

          if (collapsed) {
            // When collapsed, just show icon linking to first item
            return (
              <li key={category.basePath}>
                <Link
                  href={category.items[0]?.href || category.basePath}
                  className={isActive ? "active" : undefined}
                  title={category.label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </li>
            );
          }

          return (
            <li key={category.basePath}>
              <details open={isOpen}>
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCategory(category.basePath);
                  }}
                  className={`cursor-pointer ${isActive ? "font-medium" : ""}`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </summary>
                <ul className="flex flex-col">
                  {category.items.map((item) => {
                    const itemActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={itemActive ? "active" : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>
          );
        })}
      </nav>
    </aside>
  );
}
