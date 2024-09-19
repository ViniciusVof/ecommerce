import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.border};
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 20px 0px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.boxedWidth};
`;
export const LogoContainer = styled.div``;

export const SearchContainer = styled.div`
  margin-left: auto;
  margin-right: 30px;
  width: 507px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ActionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    height: 24px;
    width: 1px;
    background-color: ${(props) => props.theme.line};
    margin: 0px 20px;
  }

  &:last-child::after {
    content: none;
  }

  p {
    color: ${(props) => props.theme.text};
    font-size: 16px;
    padding-bottom: 3px;
    margin-left: 6px;
    font-weight: 600;
  }
`;
