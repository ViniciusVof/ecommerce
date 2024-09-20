import { Layout } from "@components/Layout";
import { ProductInformations } from "@components/ProductInformations";
import { ImageContainer, ProductHeader, Wrapper } from "./styles";
import ProductImages from "@components/ProductImages";

import products from "@mocks/products.json";

export function Product() {
  const product = products[0];
  return (
    <Layout>
      <Wrapper>
        <ProductHeader>
          <ImageContainer>
            <ProductImages images={product?.images ?? []} />
          </ImageContainer>
          <ProductInformations
            title={product.title}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
            installments={12}
          />
        </ProductHeader>
        <p>{product?.description}</p>
      </Wrapper>
    </Layout>
  );
}
