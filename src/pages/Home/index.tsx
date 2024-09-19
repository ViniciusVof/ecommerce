import { AnnouncementBar } from "../../components/AnnouncementBar";
import { BlockContent } from "../../components/BlockContent";
import { CollectionCarousel } from "../../components/CollectionCarousel";
import { ProductCard } from "../../components/ProductCard";

export function Home() {
  return (
    <>
      <AnnouncementBar />
      <ProductCard
        image="https://giassi.vtexassets.com/arquivos/ids/1162922/Tira-Manchas-Po-Vanish-Oxi-Action-Pacote-240g-Refil-Economico.png?v=638510167815300000"
        title="Vanish"
        price={50.99}
        oldPrice={80.99}
      />

      <BlockContent title="Shop From [highlight]Top Categories[/highlight]">
        <CollectionCarousel />
      </BlockContent>
    </>
  );
}
