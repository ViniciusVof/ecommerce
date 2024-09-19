import { ReactNode } from "react";
import { AnnouncementBar } from "../AnnouncementBar";
import { BoxedContainer, Wrapper } from "./styles";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface ILayout {
  children: ReactNode;
}
export function Layout({ children }: ILayout) {
  return (
    <Wrapper>
      <AnnouncementBar />
      <Header />
      <BoxedContainer>{children}</BoxedContainer>
      <Footer />
    </Wrapper>
  );
}
