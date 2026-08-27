"use client";

import { Moon, Sun } from "@/components/ui/icons";

export function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span className="theme-icon theme-icon--sun"><Sun /></span>
      <span className="theme-icon theme-icon--moon"><Moon /></span>
    </button>
  );
}
