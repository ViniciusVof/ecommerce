import { CollectionCard } from "../CollectionCard";

import collections from "../../mocks/collections.json";
import { Wrapper } from "./styles";

export function CollectionCarousel() {
  return (
    <Wrapper>
      {collections.map(({ title, image }) => (
        <CollectionCard title={title} image={image} />
      ))}
    </Wrapper>
  );
}
