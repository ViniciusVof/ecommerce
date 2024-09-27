import { useNavigate } from "react-router-dom";
import {
  CollectionImage,
  CollectionImageContainer,
  CollectionTitle,
  Wrapper,
} from "./styles";

interface ICollectionCard {
  image: string;
  title: string;
  slug: string;
}

export function CollectionCard({ title, image, slug }: ICollectionCard) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <CollectionImageContainer onClick={() => navigate(`/category/${slug}`)}>
        <CollectionImage src={image} />
      </CollectionImageContainer>
      <CollectionTitle>{title}</CollectionTitle>
    </Wrapper>
  );
}
