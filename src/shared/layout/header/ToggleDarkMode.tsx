import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

// Helper function: Safe boolean parsing from localStorage
const parseStoredBoolean = (
  value: string | null,
  fallback: boolean
): boolean => {
  if (value === null) return fallback;

  try {
    const parsed = JSON.parse(value);
    return typeof parsed === 'boolean' ? parsed : fallback;
  } catch {
    return fallback;
  }
};

export default function ToggleDarkMode() {
  const [isDark, setIsDark] = useState<boolean | null>(() => {
    const storedValue = localStorage.getItem('darkMode');
    if (storedValue !== null) return parseStoredBoolean(storedValue, true);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return mediaQuery.matches;
  });

  useEffect(() => {
    if (isDark === null) return;

    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');

    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <button
      className="toggle-dark rounded-full p-2 hover:bg-secondary"
      onClick={() => setIsDark(!isDark)}
    >
      <Moon className="w-5 h-5 block dark:hidden" />
      <Sun className="w-5 h-5 hidden dark:block" />
    </button>
  );
}
