import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CollectionImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 132px;
  height: 132px;
  border-radius: 50%;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundPrimary};

  transition: all 200ms;

  overflow: hidden;

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const CollectionImage = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

export const CollectionTitle = styled.p`
  font-size: 16px;
`;
