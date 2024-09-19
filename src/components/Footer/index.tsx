import {
  Copyright,
  FooterContainer,
  FooterItems,
  TopRightImage,
  Wrapper,
} from "./styles";
import BackgroundFooterImage from "../../assets/backgroundFooter.svg";
import { BlockVerticalMenu } from "../BlockVerticalMenu";
import { ContactUsBlock } from "../ContactUsBlock";

export function Footer() {
  const actualYer = new Date().getFullYear();
  return (
    <Wrapper>
      <TopRightImage src={BackgroundFooterImage} />

      <FooterContainer>
        <FooterItems>
          <ContactUsBlock phone="+1 202-918-2132" whatsapp="+1 202-918-2132" />
          <BlockVerticalMenu
            title="Most Popular Categories"
            menuItems={[
              { title: "Staples" },
              { title: "Beverages" },
              { title: "Personal Care" },
            ]}
          />

          <BlockVerticalMenu
            title="Customer Services"
            menuItems={[
              { title: "About Us" },
              { title: "Terms & Conditions" },
              { title: "FAQ" },
            ]}
          />
        </FooterItems>
        <Copyright>&copy; {actualYer} All rights reserved.</Copyright>
      </FooterContainer>
    </Wrapper>
  );
}
