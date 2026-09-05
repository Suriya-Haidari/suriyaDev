import { useState } from "react";
import { Moon, Sun } from "@/components/ui/Icons";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  function toggleTheme() {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  return (
    <button
      className="grid size-10 place-items-center rounded-xl border border-line bg-panel text-ink transition duration-300 hover:rotate-6 hover:border-brand hover:text-brand sm:size-11 sm:rounded-[0.875rem]"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
