import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${(props) => props.theme.white};

  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.border};

  height: 295px;
  width: 227px;

  transition: all 200ms;

  overflow: hidden;

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const ProductDiscountFlag = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 51px;
  height: 53px;

  border-radius: 0px 16px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  font-size: 14px;
  font-weight: 500;
`;

export const ProductImageContainer = styled.div`
  overflow: hidden;
  width: 227px;
  height: 189px;
  background-color: ${(props) => props.theme.backgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

export const ProductInformations = styled.div`
  padding: 12px;
  gap: 10px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h2`
  color: ${(props) => props.theme.heading};
  font-weight: 500;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  span {
    font-weight: 400;
    text-decoration: line-through;
  }
`;

export const ProductDiscount = styled.p`
  border-top: 1px solid ${(props) => props.theme.border};
  padding-top: 10px;
  color: ${(props) => props.theme.discountColorPrice};
  font-weight: 500;
`;
