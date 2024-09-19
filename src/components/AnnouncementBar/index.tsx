import { Container, MenuItem, MenuContainer, Wrapper } from "./styles";
import { ReactSVG } from "react-svg";
import LocationSVG from "../../assets/location.svg";
import DeliveryTruckSVG from "../../assets/deliveryTruck.svg";
import DiscountSVG from "../../assets/discount.svg";

export function AnnouncementBar() {
  return (
    <Wrapper>
      <Container>
        <p>Welcome to worldwide Megamart!</p>
        <MenuContainer>
          <MenuItem>
            <ReactSVG src={LocationSVG} />
            <p>
              Deliver to <strong>423651</strong>
            </p>
          </MenuItem>

          <MenuItem>
            <ReactSVG src={DeliveryTruckSVG} />
            <p>Track your order</p>
          </MenuItem>

          <MenuItem>
            <ReactSVG src={DiscountSVG} />
            <p>All Offers</p>
          </MenuItem>
        </MenuContainer>
      </Container>
    </Wrapper>
  );
}
