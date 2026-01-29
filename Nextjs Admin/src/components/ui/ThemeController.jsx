"use client";

import { forwardRef } from "react";
import { Sun, Moon } from "lucide-react";
import Swap from "./Swap";

/**
 * ThemeController Component
 * Controls the page theme using checkbox or radio inputs
 * 
 * @param {string} type - "toggle" | "swap" | "dropdown"
 * @param {string} lightTheme - Theme name for light mode
 * @param {string} darkTheme - Theme name for dark mode
 * @param {array} themes - Array of theme names for dropdown type
 */

// Toggle style theme controller
export function ThemeToggle({ 
  lightTheme = "light", 
  darkTheme = "dark",
  className = "",
  ...props 
}) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <Sun className="w-5 h-5" />
      <input
        type="checkbox"
        value={darkTheme}
        className="toggle theme-controller"
        {...props}
      />
      <Moon className="w-5 h-5" />
    </label>
  );
}

// Swap style theme controller
export function ThemeSwap({
  lightTheme = "light",
  darkTheme = "dark",
  effect = "rotate",
  onIcon = <Moon className="w-6 h-6" />,
  offIcon = <Sun className="w-6 h-6" />,
  className = "",
  ...props
}) {
  return (
    <Swap
      effect={effect}
      on={onIcon}
      off={offIcon}
      className={className}
      {...props}
    >
      <input
        type="checkbox"
        className="theme-controller"
        value={darkTheme}
      />
    </Swap>
  );
}

// Dropdown style theme controller
export const ThemeDropdown = forwardRef(function ThemeDropdown(
  {
    themes = ["light", "dark", "cupcake", "retro", "cyberpunk", "valentine", "forest"],
    triggerText = "Theme",
    className = "",
    ...props
  },
  ref
) {
  return (
    <div ref={ref} className={`dropdown ${className}`} {...props}>
      <div tabIndex={0} role="button" className="btn m-1">
        {triggerText}
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box z-50 w-52 p-2 shadow-2xl"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
              value={theme}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

// Default export with all variants
const ThemeController = {
  Toggle: ThemeToggle,
  Swap: ThemeSwap,
  Dropdown: ThemeDropdown,
};

export default ThemeController;
