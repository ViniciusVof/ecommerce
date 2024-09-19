import { ReactNode } from "react";
import { AnnouncementBar } from "../AnnouncementBar";
import { BoxedContainer, Wrapper } from "./styles";

interface ILayout {
  children: ReactNode;
}
export function Layout({ children }: ILayout) {
  return (
    <Wrapper>
      <AnnouncementBar />
      <BoxedContainer>{children}</BoxedContainer>
    </Wrapper>
  );
}
