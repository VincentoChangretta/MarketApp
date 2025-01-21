import { FC, ReactNode, useMemo, useState } from "react";
import { LOCALSTORE_THEME, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultState =
  (localStorage.getItem(LOCALSTORE_THEME) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultState);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext value={defaultValue}>{children}</ThemeContext>;
};
