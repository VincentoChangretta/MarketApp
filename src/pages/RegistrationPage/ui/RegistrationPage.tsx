import { classNames } from "shared/lib/classNames";

export const RegistrationPage = () => {
  return (
    <div className={classNames("registration", { modal: true }, ["123"])}>
      Registration
    </div>
  );
};
