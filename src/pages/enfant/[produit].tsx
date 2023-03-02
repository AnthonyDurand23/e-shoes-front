import { GetServerSidePropsContext } from 'next';

import Product from '@/components/Product/Product';

import { ProductType } from '@/types/types';
import { getSizesByGenre } from '@/tools/tools';

interface ProductLayerProps {
  product: ProductType;
}

const ProductLayer: React.FC<ProductLayerProps> = ({ product }) => {
  return <Product product={product} sizes={getSizesByGenre(product.genre)} />;
};

export default ProductLayer;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.query.produit;
  const data = await fetch(`https://api-e-shoes.adwebdev.fr/produit/${id}`);
  const product = await data.json();

  return {
    props: {
      product,
    },
  };
};
