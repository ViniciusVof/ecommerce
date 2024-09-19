import {
  CollectionImage,
  CollectionImageContainer,
  CollectionTitle,
  Wrapper,
} from "./styles";

interface ICollectionCard {
  image: string;
  title: string;
}

export function CollectionCard({ title, image }: ICollectionCard) {
  return (
    <Wrapper>
      <CollectionImageContainer>
        <CollectionImage src={image} />
      </CollectionImageContainer>
      <CollectionTitle>{title}</CollectionTitle>
    </Wrapper>
  );
}
