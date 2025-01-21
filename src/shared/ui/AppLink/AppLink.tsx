import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss"

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, ...otherProps } = props;
  return (
    <Link to={to} className={`${cls.appLink} ${className}`} {...otherProps}>
      {children}
    </Link>
  );
};
