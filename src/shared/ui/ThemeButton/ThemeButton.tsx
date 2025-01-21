import { useTheme } from "app/providers/themeProvider/lib/useTheme";
import cls from "./ThemeButton.module.scss";
import { useState } from "react";

export const ThemeButton = () => {
  const [circle, setCircle] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const changeTheme = () => {
    toggleTheme();
    setCircle((prev) => !prev);
  };

  return (
    <button className={`${cls.themeButton}`} onClick={() => changeTheme()}>
      <div className={`${cls.circle} ${circle ? cls.move : ""}`}></div>
    </button>
  );
};
