import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 20px;
    font-weight: 800;
    color: ${(props) => props.theme.white};
  }
`;

export const ContactItem = styled.div`
  display: flex;
  gap: 11px;
`;

export const ContactItemInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: ${(props) => props.theme.white};
  font-weight: 300;
  strong {
    font-weight: 400;
  }
`;
