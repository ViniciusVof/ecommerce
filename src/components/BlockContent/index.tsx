import { ReactNode } from "react";
import {
  InformationsBlockContent,
  SeeAllBlockContent,
  TitleBlockContent,
  Wrapper,
} from "./styles";
import { highlightText } from "@utils/highlightText";

interface IBlockContent {
  title: string;
  children: ReactNode;
}

export function BlockContent({ title, children }: IBlockContent) {
  return (
    <Wrapper>
      <InformationsBlockContent>
        <TitleBlockContent>{highlightText(title)}</TitleBlockContent>
        <SeeAllBlockContent>See More</SeeAllBlockContent>
      </InformationsBlockContent>
      {children}
    </Wrapper>
  );
}
