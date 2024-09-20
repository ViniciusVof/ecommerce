import { ButtonHTMLAttributes } from "react";
import { Wrapper } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
export function Button({ title, ...props }: IButton) {
  return <Wrapper {...props}>{title}</Wrapper>;
}
