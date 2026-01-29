"use client";

import { Menu } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar({ collapsed, onToggleSidebar }) {
  return (
    <header
  className={`navbar bg-base-100 shadow-sm fixed top-0 z-30
  transition-[left,width] duration-300 ease-in-out
  left-0 w-full
  ${
    collapsed
      ? "md:left-20 md:w-[calc(100%-5rem)]"
      : "md:left-72 md:w-[calc(100%-18rem)]"
  }`}
>
      <div className="flex-none">
        <button
          type="button"
          aria-label="Toggle sidebar"
          className="btn btn-ghost btn-square"
          onClick={onToggleSidebar}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 px-2 lg:px-4 min-w-0">
        <span className="text-lg font-semibold tracking-tight truncate">
          Admin Panel
        </span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="form-control hidden lg:block">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 xl:w-64 input-sm"
          />
        </div>
        <ThemeSwitcher />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <span className="flex h-full w-full items-center justify-center text-xs font-semibold">
                AD
              </span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-40 rounded-box bg-base-100 p-2 shadow z-50"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

