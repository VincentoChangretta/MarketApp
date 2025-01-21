import { Link } from "react-router-dom";
import cls from "./Logo.module.scss";
import { AppRoutes } from "shared/config/routeConfig";
export const Logo = () => {
  return (
    <Link to={AppRoutes.MAIN} className={cls.logo}>
      Market
    </Link>
  );
};
