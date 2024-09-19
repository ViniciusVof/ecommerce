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
}

export function OfferCard({ category, title, image }: IOfferCard) {
  return (
    <Wrapper>
      <OfferImageContainer>
        <OfferImage src={image} />
      </OfferImageContainer>
      <OfferCategory>{category}</OfferCategory>
      <OfferTitle>{title}</OfferTitle>
    </Wrapper>
  );
}
