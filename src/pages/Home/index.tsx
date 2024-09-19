import { BlockContent } from "@components/BlockContent";
import { BrandsCarousel } from "@components/BrandsCarousel";
import { CollectionCarousel } from "@components/CollectionCarousel";
import { Layout } from "@components/Layout";
import { ProductCarousel } from "@components/ProductCarousel";

export function Home() {
  return (
    <Layout>
      <BlockContent title="Shop From [highlight]Top Categories[/highlight]">
        <ProductCarousel />
      </BlockContent>

      <BlockContent title="Shop From [highlight]Top Categories[/highlight]">
        <CollectionCarousel />
      </BlockContent>

      <BlockContent title="Top [highlight]Electronic Brands[/highlight]">
        <BrandsCarousel />
      </BlockContent>
    </Layout>
  );
}
