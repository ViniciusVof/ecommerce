import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const Input = styled.input`
  padding: 15px 15px 15px 44px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 300;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundTertiary};
  color: ${(props) => props.theme.text};
  border: 0;
  height: 48px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.text};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 15px;
  height: 100%;
`;
