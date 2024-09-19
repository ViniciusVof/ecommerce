import { ReactNode } from "react";
import { AnnouncementBar } from "@components/AnnouncementBar";
import { BoxedContainer, Wrapper } from "./styles";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

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
