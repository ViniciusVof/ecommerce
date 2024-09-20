import styled from "styled-components";

import { Button as ButtonComponent } from "@components/Button";

export const Wrapper = styled.div`
  min-width: 400px;
  width: 100%;
`;

export const ProductTitle = styled.h2`
  font-weight: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.heading};
`;

export const ProductOldPrice = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-decoration: line-through;
  color: ${(props) => props.theme.text};
`;

export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.primary};
`;

export const ProductInstallments = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  margin-top: 16px;
  padding-bottom: 8px;
`;

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border};
  margin: 20px auto;
`;
export const Button = styled(ButtonComponent)`
  margin: 16px auto;
`;

export const FieldsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
