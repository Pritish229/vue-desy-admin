"use client";

import { useEffect, useState } from "react";

const THEMES = [
  "light",
  "dark",
  "coffee",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "halloween",
  "garden",
  "forest",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "autumn",
  "business",
  "acid",
  "night",
  "winter",
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const initial =
      document.documentElement.getAttribute("data-theme") || "light";
    setCurrentTheme(initial);
  }, []);

  const setTheme = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        className="btn btn-ghost btn-sm md:btn-md gap-2"
        aria-label="Change theme"
      >
        <span className="w-3 h-3 rounded-full bg-primary" />
        <span className="hidden sm:inline text-xs md:text-sm capitalize">
          {currentTheme}
        </span>
      </button>
      <ul className="dropdown-content z-50 bg-base-100 rounded-box shadow w-44 max-h-60 overflow-y-auto overflow-x-hidden mt-2 py-2 space-y-1">
        <li className="px-4 pb-1 text-[10px] uppercase tracking-wide opacity-60">
          Themes
        </li>
        {THEMES.map((theme) => (
          <li key={theme} className="px-2">
            <button
              type="button"
              className={`w-full text-left rounded-md px-2 py-1 text-sm capitalize ${
                theme === currentTheme
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-200"
              }`}
              onClick={() => setTheme(theme)}
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

