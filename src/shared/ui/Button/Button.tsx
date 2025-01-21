import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, type = "button", ...otherProps } = props;
  return (
    <button type={type} className={cls.btn} {...otherProps}>
      {children}
    </button>
  );
};
