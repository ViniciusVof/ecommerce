import { ReactSVG } from "react-svg";
import {
  ActionItem,
  ActionsContainer,
  Container,
  LogoContainer,
  SearchContainer,
  Wrapper,
} from "./styles";

import AccountSVG from "@assets/user.svg";
import CartSVG from "@assets/cart.svg";
import LogoSVG from "@assets/mainLogo.svg";
import { TextField } from "@components/TextField";

import SearchSVG from "@assets/search.svg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <LogoContainer onClick={() => navigate("/")}>
          <ReactSVG src={LogoSVG} />
        </LogoContainer>
        <SearchContainer>
          <TextField
            iconLeft={SearchSVG}
            placeholder="Search essentials, groceries and more..."
          />
        </SearchContainer>
        <ActionsContainer>
          <ActionItem>
            <ReactSVG src={AccountSVG} />
            <p>Sign Up/Sign In</p>
          </ActionItem>

          <ActionItem>
            <ReactSVG src={CartSVG} />
            <p>Cart</p>
          </ActionItem>
        </ActionsContainer>
      </Container>
    </Wrapper>
  );
}
