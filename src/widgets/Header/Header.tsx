import { Logo } from "shared/ui/Logo/Logo";
import cls from "./Header.module.scss";
import { HeaderNav } from "./Nav/HeaderNav";
import { Button } from "shared/ui/Button/Button";
import { ThemeButton } from "shared/ui/ThemeButton/ThemeButton";
import { Link } from "react-router-dom";
import { RoutePaths } from "shared/config/routeConfig";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={cls.inner}>
          <Logo />
          <HeaderNav />
          <div className={cls.buttons}>
            <ThemeButton />
            <Link className="linkBtn" to={RoutePaths.registration}>
              <Button>Log In</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
