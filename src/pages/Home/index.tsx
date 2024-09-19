import { AnnouncementBar } from "../../components/AnnouncementBar";
import { BlockContent } from "../../components/BlockContent";
import { CollectionCarousel } from "../../components/CollectionCarousel";
import { ProductCarousel } from "../../components/ProductCarousel";

export function Home() {
  return (
    <>
      <AnnouncementBar />

      <BlockContent title="Shop From [highlight]Top Categories[/highlight]">
        <ProductCarousel />
      </BlockContent>

      <BlockContent title="Shop From [highlight]Top Categories[/highlight]">
        <CollectionCarousel />
      </BlockContent>
    </>
  );
}
