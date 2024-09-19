import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.boxedWidth};
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    height: 18px;
    width: 1px;
    background-color: ${(props) => props.theme.line};
    margin: 0px 16px;
    border-radius: 8px;
  }

  &:last-child::after {
    content: none;
  }

  p {
    color: ${(props) => props.theme.text};
    font-size: 14px;
    padding-bottom: 3px;
    margin-left: 6px;
    font-weight: 300;
    strong {
      font-weight: 400;
    }
  }
`;
