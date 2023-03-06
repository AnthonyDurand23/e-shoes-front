import { GetServerSidePropsContext } from 'next';

import Product from '@/components/Product/Product';

import { ProductType } from '@/types/types';
import { getSizesByGender } from '@/tools/tools';

interface ProductLayerProps {
  product: ProductType;
}

const ProductLayer: React.FC<ProductLayerProps> = ({ product }) => {
  return <Product product={product} sizes={getSizesByGender(product.gender)} />;
};

export default ProductLayer;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.query.produit;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}produit/${id}`);
  const product = await data.json();

  return {
    props: {
      product,
    },
  };
};
