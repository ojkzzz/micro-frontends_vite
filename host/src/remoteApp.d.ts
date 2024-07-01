interface Props {
  onClick: (...args: any) => void;
}

declare module "remoteApp/Button" {
  import { FC } from "react";
  const Button: FC<Props>;
  export default Button;
}
