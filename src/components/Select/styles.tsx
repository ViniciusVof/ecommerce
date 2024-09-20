import styled from "styled-components";
import Select from "react-select";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 16px;
  }
`;
export const StyledSelect = styled(Select)`
  .react-select__control {
    border-radius: 10px;
    font-weight: 400;
    width: 100%;
    background-color: ${(props) => props.theme.backgroundTertiary};
    color: ${(props) => props.theme.text};
    border: 0;
    height: 48px;
    display: flex;
    align-items: center;
    box-shadow: none;

    &:focus {
      outline: none;
    }
  }

  .react-select__control--is-focused {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.05);
  }

  .react-select__placeholder {
    color: ${(props) => props.theme.text};
  }

  .react-select__menu {
    background-color: ${(props) => props.theme.backgroundTertiary};
    color: ${(props) => props.theme.text};
  }

  .react-select__option {
    background-color: ${(props) => props.theme.backgroundTertiary};
    color: ${(props) => props.theme.text};
    cursor: pointer;
    transition: all 200ms;

    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
    }
  }
` as typeof Select;
