import { useNavigate } from "react-router-dom";
import {
  OfferCategory,
  OfferImage,
  OfferImageContainer,
  OfferTitle,
  Wrapper,
} from "./styles";

interface IOfferCard {
  image: string;
  category: string;
  title: string;
  slug: string;
}

export function OfferCard({ category, title, image, slug }: IOfferCard) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <OfferImageContainer onClick={() => navigate(`category/${slug}`)}>
        <OfferImage src={image} />
      </OfferImageContainer>
      <OfferCategory>{category}</OfferCategory>
      <OfferTitle>{title}</OfferTitle>
    </Wrapper>
  );
}
