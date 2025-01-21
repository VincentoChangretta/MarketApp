import { useContext } from "react";
import { LOCALSTORE_THEME, Theme, ThemeContext } from "./ThemeContext";

interface useThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): useThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    console.log(newTheme);

    setTheme(newTheme);
    localStorage.setItem(LOCALSTORE_THEME, newTheme);
  };
  return { theme, toggleTheme };
};
