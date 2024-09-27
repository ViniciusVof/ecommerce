import { Layout } from "@components/Layout";
import { ProductInformations } from "@components/ProductInformations";
import { ImageContainer, ProductHeader, Wrapper } from "./styles";
import ProductImages from "@components/ProductImages";

import products from "@mocks/products.json";
import { useParams } from "react-router-dom";

export function Product() {
  const { slug } = useParams();
  const product = products.find((product) => product.slug === slug);

  return (
    product && (
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
              variants={product.variants}
            />
          </ProductHeader>
          <p>{product?.description}</p>
        </Wrapper>
      </Layout>
    )
  );
}
