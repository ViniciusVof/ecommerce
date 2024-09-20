import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid red;
  display: flex;
  border-radius: 10px;
  font-weight: 400;
  background-color: ${(props) => props.theme.backgroundTertiary};
  color: ${(props) => props.theme.text};
  border: 0;
  height: 48px;

  &:focus {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 0 15px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const VisorInput = styled.input`
  width: 100%;
  border: 0;
  background-color: transparent;
  text-align: center;

  &:focus {
    outline: none;
  }
`;
