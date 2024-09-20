import styled from "styled-components";

export const Wrapper = styled.button`
  color: ${(props) => props.theme.heading};
  font-size: 14px;
  font-weight: 400;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  transition: all 500ms;
  padding: 9px 14px;

  border-radius: 18px;

  cursor: pointer;

  border: 0;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 8px ${(props) => props.theme.primary};
  }
`;
