import { ReactNode } from "react";
import { AnnouncementBar } from "@components/AnnouncementBar";
import { BoxedContainer } from "./styles";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { MenuHeader } from "@components/MenuHeader";

import mainMenu from "@mocks/mainMenu.json";
interface ILayout {
  children: ReactNode;
}
export function Layout({ children }: ILayout) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <MenuHeader menuItems={mainMenu} />

      <BoxedContainer>{children}</BoxedContainer>
      <Footer />
    </>
  );
}
