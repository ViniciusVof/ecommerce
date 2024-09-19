import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.border};
  width: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  gap: 14px;
  max-width: ${(props) => props.theme.boxedWidth};
`;

export const MenuItem = styled.div`
  color: ${(props) => props.theme.heading};
  font-size: 14px;
  font-weight: 400;
  background: ${(props) => props.theme.backgroundTertiary};
  transition: all 500ms;
  padding: 9px 14px;

  border-radius: 18px;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
  }
`;
