import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Product } from '@/types/types';

interface ProductProps {
  product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={`La page de l'article: ${product.nom}`} />
        <title>{`E-SHOES | Article: ${product.nom}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-h-[calc(100vh-80px-134px)]">
        <div className="flex flex-col items-center">
          <h1 className="p-8 h3">
            {product.marque} - {product.nom}
          </h1>
          <div className="flex gap-4 flex-wrap justify-center">
            {product.photos.split('|').map((photo) => (
              <Image
                key={product.id}
                src={`https://res.cloudinary.com/doemagjfj/image/upload/v1677079486/e-shoes/${photo}.jpg`}
                //placeholder="blur"
                width={200}
                height={200}
                alt={`photo chaussures ${product.nom}`}
                //sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

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
