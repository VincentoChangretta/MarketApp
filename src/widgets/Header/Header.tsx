import { Logo } from "shared/ui/Logo/Logo";
import cls from "./Header.module.scss";
import { HeaderNav } from "./Nav/HeaderNav";
import { Button } from "shared/ui/Button/Button";
import { useTheme } from "app/providers/themeProvider/lib/useTheme";

export const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <header>
      <div className={cls.inner}>
        <Logo />
        <HeaderNav />
        <Button onClick={toggleTheme}>Theme</Button>
      </div>
    </header>
  );
};
