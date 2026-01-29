"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function formatSegment(segment) {
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function PageHeader({ title, description, rightSlot }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // e.g. ["admin","users"]
  const subSegments = segments[0] === "admin" ? segments.slice(1) : segments;

  const crumbs = [];

  if (subSegments.length === 0 || subSegments[0] === "dashboard") {
    // Dashboard root
    crumbs.push({ href: "/admin/dashboard", label: "Dashboard" });
  } else {
    crumbs.push({ href: "/admin/dashboard", label: "Dashboard" });

    let href = "/admin";
    subSegments.forEach((seg) => {
      href += `/${seg}`;
      crumbs.push({ href, label: formatSegment(seg) });
    });
  }

  const resolvedTitle =
    title ||
    (crumbs.length ? crumbs[crumbs.length - 1].label : "Dashboard");

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {resolvedTitle}
          </h1>
          {description && (
            <p className="text-sm text-base-content/70 mt-1">
              {description}
            </p>
          )}
        </div>
        {rightSlot ? <div className="mt-2 sm:mt-0">{rightSlot}</div> : null}
      </div>

      <nav className="breadcrumbs text-sm text-base-content/60">
        <ul>
          {crumbs.map((crumb, index) => (
            <li key={crumb.href}>
              {index === crumbs.length - 1 ? (
                <span>{crumb.label}</span>
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

