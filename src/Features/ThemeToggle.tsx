import { useTheme } from "../Provider/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition z-50"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}

