import { BlockContent } from "@components/BlockContent";
import { BrandsCarousel } from "@components/BrandsCarousel";
import { CollectionCarousel } from "@components/CollectionCarousel";
import { Layout } from "@components/Layout";
import { OfferCarousel } from "@components/OfferCarousel";
import { ProductCarousel } from "@components/ProductCarousel";
import { SlideCarousel } from "@components/SlideCarousel";

export function Home() {
  return (
    <Layout>
      <SlideCarousel />
      <BlockContent title="Shop From [highlight]Top Categories[/highlight]">
        <ProductCarousel />
      </BlockContent>

      <BlockContent title="Shop From [highlight]Top Categories[/highlight]">
        <CollectionCarousel />
      </BlockContent>

      <BlockContent title="Top [highlight]Electronic Brands[/highlight]">
        <BrandsCarousel />
      </BlockContent>

      <BlockContent title="Daily [highlight]Essentials[/highlight]">
        <OfferCarousel />
      </BlockContent>
    </Layout>
  );
}
