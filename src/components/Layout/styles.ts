import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BoxedContainer = styled.div`
  max-width: ${(props) => props.theme.boxedWidth};
  padding: 20px 0px;
`;
