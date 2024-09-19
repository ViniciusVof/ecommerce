import { ReactSVG } from "react-svg";
import { IconWrapper, Input, Wrapper } from "./styles";
import { InputHTMLAttributes } from "react";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: string;
}
export function TextField({ iconLeft, ...props }: ITextField) {
  return (
    <Wrapper>
      {iconLeft && (
        <IconWrapper>
          <ReactSVG src={iconLeft} />
        </IconWrapper>
      )}

      <Input {...props} />
    </Wrapper>
  );
}
