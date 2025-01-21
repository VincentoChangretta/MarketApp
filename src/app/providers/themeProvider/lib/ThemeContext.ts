import { createContext } from "react";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

interface themeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<themeContextProps>({});

export const LOCALSTORE_THEME = "theme"
