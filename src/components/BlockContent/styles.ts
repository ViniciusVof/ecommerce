import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 120px;
`;

export const InformationsBlockContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding-bottom: 16px;
  margin-bottom: 40px;
`;

export const TitleBlockContent = styled.div`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.text};

  span.highlight {
    display: inline;
    color: ${(props) => props.theme.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.primary};
  }
`;

export const SeeAllBlockContent = styled.div`
  display: flex;
  gap: 6px;
  font-size: 16px;
  cursor: pointer;
`;
