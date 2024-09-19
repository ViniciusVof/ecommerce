import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuTitle = styled.h2`
  position: relative;
  color: ${(props) => props.theme.white};
  font-weight: 600;
  margin-bottom: 36px;
  &::after {
    content: "";
    position: absolute;
    top: 36px;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.white};
  }
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 0px;
`;
export const MenuItem = styled.div`
  color: ${(props) => props.theme.white};
  font-size: 16;
`;
