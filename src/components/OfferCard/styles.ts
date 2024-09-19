import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OfferImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 187px;
  height: 187px;
  border-radius: 16px;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundPrimary};
  margin-bottom: 20px;

  transition: all 200ms;

  overflow: hidden;

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const OfferImage = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

export const OfferCategory = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.text};
  margin-bottom: 4px;
`;

export const OfferTitle = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.heading};
  font-weight: 600;
`;
