import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isGlowing?: boolean;
};

export default function Button({ ...props }: ButtonProps) {
  return <StyledButton {...props} />;
}
