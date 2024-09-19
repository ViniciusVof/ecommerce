import { ReactSVG } from "react-svg";
import { ContactItem, ContactItemInformations, Wrapper } from "./styles";

import WhatsAppSVG from "@assets/whatsapp.svg";
import PhoneSVG from "@assets/phone.svg";

import LogoSVG from "@assets/logo.svg";

interface IContactUsBlock {
  showLogo?: boolean;
  phone?: string;
  whatsapp?: string;
}
export function ContactUsBlock({
  showLogo = true,
  phone,
  whatsapp,
}: IContactUsBlock) {
  return (
    <Wrapper>
      {showLogo && <ReactSVG src={LogoSVG} />}
      <h2>Contact Us</h2>
      {!!whatsapp && (
        <ContactItem>
          <ReactSVG src={WhatsAppSVG} />
          <ContactItemInformations>
            <p>Whats App</p>
            <strong>{whatsapp}</strong>
          </ContactItemInformations>
        </ContactItem>
      )}

      {!!phone && (
        <ContactItem>
          <ReactSVG src={PhoneSVG} />
          <ContactItemInformations>
            <p>Phone</p>
            <strong>{phone}</strong>
          </ContactItemInformations>
        </ContactItem>
      )}
    </Wrapper>
  );
}
