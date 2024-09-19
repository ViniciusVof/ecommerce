import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 120px;
  background-color: ${(props) => props.theme.primary};

  min-height: 592px;
`;
export const FooterContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.boxedWidth};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  justify-content: flex-start;
  padding: 80px;
  flex: 1;
`;

export const Copyright = styled.div`
  color: ${(props) => props.theme.white};
  padding: 30px 0px;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.separatorFooter};
  font-weight: 300;
`;

export const TopRightImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: 401px;
`;
