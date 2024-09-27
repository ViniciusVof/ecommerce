import { ReactNode } from "react";
import {
  InformationsBlockContent,
  SeeAllBlockContent,
  TitleBlockContent,
  Wrapper,
} from "./styles";
import { highlightText } from "@utils/highlightText";
import { useNavigate } from "react-router-dom";

interface IBlockContent {
  title: string;
  children: ReactNode;
  redirect?: string;
}

export function BlockContent({ title, children, redirect }: IBlockContent) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <InformationsBlockContent>
        <TitleBlockContent>{highlightText(title)}</TitleBlockContent>
        {redirect && (
          <SeeAllBlockContent onClick={() => navigate(redirect)}>
            See More
          </SeeAllBlockContent>
        )}
      </InformationsBlockContent>
      {children}
    </Wrapper>
  );
}
