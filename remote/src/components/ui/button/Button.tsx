import { FC } from "react";

interface Props {
  onClick: (...args: any) => void;
}

const Button: FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Button from Microfrontend</button>;
};
export default Button;
