import { ReactNode } from "react";
import { AnnouncementBar } from "../AnnouncementBar";
import { BoxedContainer, Wrapper } from "./styles";
import { Footer } from "../Footer";

interface ILayout {
  children: ReactNode;
}
export function Layout({ children }: ILayout) {
  return (
    <Wrapper>
      <AnnouncementBar />
      <BoxedContainer>{children}</BoxedContainer>
      <Footer />
    </Wrapper>
  );
}
