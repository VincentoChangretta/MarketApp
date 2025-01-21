import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./HeaderNav.module.scss";
import { RoutePaths } from "shared/config/routeConfig";

export const HeaderNav = () => {
  return (
    <nav>
      <ul className={cls.list}>
        <li>
          <AppLink to={RoutePaths.main}>Main</AppLink>
        </li>
        <li>
          <AppLink to={RoutePaths.about}>About</AppLink>
        </li>
        <li>
          <AppLink to={RoutePaths.store}>Store</AppLink>
        </li>
      </ul>
    </nav>
  );
};
