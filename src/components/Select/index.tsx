import { GroupBase, Props } from "react-select";
import { StyledSelect, Wrapper } from "./styles";

interface SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
  label: string;
}

export function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({ name, label, ...props }: SelectProps<Option, IsMulti, Group>) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <StyledSelect name={name} classNamePrefix="react-select" {...props} />
    </Wrapper>
  );
}
