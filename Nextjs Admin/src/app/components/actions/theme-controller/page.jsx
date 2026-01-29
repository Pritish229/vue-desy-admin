"use client";

import { useState, useEffect } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import { Sun, Moon, Monitor } from "lucide-react";

const THEMES = [
  "light", "dark", "cupcake", "bumblebee", "emerald", 
  "corporate", "synthwave", "retro", "halloween", "garden",
  "forest", "lofi", "pastel", "fantasy", "wireframe",
  "black", "luxury", "dracula", "autumn", "business",
  "acid", "night", "winter"
];

export default function ThemeControllerPage() {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    setCurrentTheme(theme);
  }, []);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <ShowcasePage
      title="Theme Controller"
      description="Control the page theme using checkbox, radio inputs, or buttons."
    >
      {/* Toggle Controller */}
      <ShowcaseSection title="Toggle Controller" description="Switch between light and dark theme.">
        <ShowcaseItem title="Simple Toggle">
          <label className="flex cursor-pointer gap-2 items-center">
            <Sun className="w-5 h-5" />
            <input 
              type="checkbox" 
              className="toggle theme-controller"
              checked={currentTheme === "dark"}
              onChange={(e) => handleThemeChange(e.target.checked ? "dark" : "light")}
            />
            <Moon className="w-5 h-5" />
          </label>
        </ShowcaseItem>

        <ShowcaseItem title="Styled Toggle">
          <label className="flex cursor-pointer gap-2 items-center">
            <Sun className="w-5 h-5 text-warning" />
            <input 
              type="checkbox" 
              className="toggle toggle-primary theme-controller"
              checked={currentTheme === "dark"}
              onChange={(e) => handleThemeChange(e.target.checked ? "dark" : "light")}
            />
            <Moon className="w-5 h-5 text-primary" />
          </label>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Radio Controllers */}
      <ShowcaseSection title="Radio Controllers" description="Select from multiple themes.">
        <ShowcaseItem title="Theme Radio Group">
          <div className="flex flex-wrap gap-4">
            {["light", "dark", "cupcake", "synthwave", "dracula"].map((theme) => (
              <label key={theme} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="theme-radio"
                  className="radio radio-primary theme-controller"
                  checked={currentTheme === theme}
                  onChange={() => handleThemeChange(theme)}
                />
                <span className="capitalize">{theme}</span>
              </label>
            ))}
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Visual Cards">
          <div className="flex flex-wrap gap-2">
            {["light", "dark", "forest", "luxury"].map((theme) => (
              <label 
                key={theme}
                className={`cursor-pointer rounded-lg border-2 p-3 transition-all ${
                  currentTheme === theme 
                    ? 'border-primary bg-primary/10' 
                    : 'border-base-300 hover:border-primary/50'
                }`}
              >
                <input
                  type="radio"
                  name="theme-card"
                  className="sr-only theme-controller"
                  checked={currentTheme === theme}
                  onChange={() => handleThemeChange(theme)}
                />
                <div className="flex flex-col items-center gap-1">
                  <div 
                    className="w-12 h-8 rounded"
                    style={{
                      background: theme === 'light' ? '#fff' : 
                                  theme === 'dark' ? '#1d232a' :
                                  theme === 'forest' ? '#171212' : '#09090b'
                    }}
                  />
                  <span className="text-xs capitalize">{theme}</span>
                </div>
              </label>
            ))}
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Dropdown Controller */}
      <ShowcaseSection title="Dropdown Controller" description="Theme selector in a dropdown menu.">
        <ShowcaseItem title="Select Dropdown">
          <select 
            className="select select-bordered w-full max-w-xs"
            value={currentTheme}
            onChange={(e) => handleThemeChange(e.target.value)}
          >
            {THEMES.map((theme) => (
              <option key={theme} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </option>
            ))}
          </select>
        </ShowcaseItem>

        <ShowcaseItem title="Menu Dropdown">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme: {currentTheme}
              <svg width="12" height="12" className="inline-block ml-1" viewBox="0 0 12 12">
                <path fill="currentColor" d="M2 4l4 4 4-4z"/>
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow max-h-60 overflow-y-auto">
              {THEMES.map((theme) => (
                <li key={theme}>
                  <button 
                    className={currentTheme === theme ? "active" : ""}
                    onClick={() => handleThemeChange(theme)}
                  >
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Button Group Controller */}
      <ShowcaseSection title="Button Controllers" description="Theme control using buttons.">
        <ShowcaseItem title="Icon Buttons">
          <div className="join">
            <button 
              className={`btn join-item ${currentTheme === 'light' ? 'btn-active' : ''}`}
              onClick={() => handleThemeChange("light")}
            >
              <Sun className="w-5 h-5" />
            </button>
            <button 
              className={`btn join-item ${currentTheme === 'dark' ? 'btn-active' : ''}`}
              onClick={() => handleThemeChange("dark")}
            >
              <Moon className="w-5 h-5" />
            </button>
            <button 
              className={`btn join-item ${currentTheme === 'cupcake' ? 'btn-active' : ''}`}
              onClick={() => handleThemeChange("cupcake")}
            >
              <Monitor className="w-5 h-5" />
            </button>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Text Buttons">
          <div className="join">
            {["light", "dark", "synthwave", "forest"].map((theme) => (
              <button 
                key={theme}
                className={`btn btn-sm join-item capitalize ${currentTheme === theme ? 'btn-primary' : ''}`}
                onClick={() => handleThemeChange(theme)}
              >
                {theme}
              </button>
            ))}
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Swap Controller */}
      <ShowcaseSection title="Swap Controller" description="Toggle theme with swap animation.">
        <ShowcaseItem title="Animated Toggle">
          <label className="swap swap-rotate">
            <input 
              type="checkbox" 
              className="theme-controller"
              checked={currentTheme === "dark"}
              onChange={(e) => handleThemeChange(e.target.checked ? "dark" : "light")}
            />
            <Sun className="swap-off w-10 h-10 text-warning" />
            <Moon className="swap-on w-10 h-10" />
          </label>
        </ShowcaseItem>

        <ShowcaseItem title="In Navbar Style">
          <div className="navbar bg-base-100 rounded-box shadow">
            <div className="flex-1">
              <span className="text-xl font-bold">Logo</span>
            </div>
            <div className="flex-none">
              <label className="swap swap-rotate btn btn-ghost btn-circle">
                <input 
                  type="checkbox" 
                  className="theme-controller"
                  checked={currentTheme === "dark"}
                  onChange={(e) => handleThemeChange(e.target.checked ? "dark" : "light")}
                />
                <Sun className="swap-off w-5 h-5" />
                <Moon className="swap-on w-5 h-5" />
              </label>
            </div>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
