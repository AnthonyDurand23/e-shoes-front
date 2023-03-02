import { v4 as uuidv4 } from 'uuid';

import Head from 'next/head';

import CardsProducts from '@/components/CardsProducts/CardsProducts';

import { ProductType } from '@/types/types';

interface ProductsProps {
  products: ProductType[];
}

const Child: React.FC<ProductsProps> = ({ products }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="La page de chaussures pour enfant de la boutique en ligne e-shoes" />
        <title>E-SHOES | Enfant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="genre-body">
        <div className="genre-body-container">
          <h1 className="w-full h4 md:h3 xl:h2 text-center">Chaussures Enfant</h1>
          {products.map((product) => (
            <CardsProducts
              key={uuidv4()}
              link={`/enfant/${product.id.toString()}`}
              img={`https://res.cloudinary.com/doemagjfj/image/upload/v1677079486/e-shoes/${
                product.photos.split('|')[0]
              }.jpg`}
              altImageText={`photo chaussures ${product.nom}`}
              brand={product.marque}
              name={product.nom}
              category={product.categories}
              price={Number(product.prix)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Child;

export const getServerSideProps = async () => {
  const data = await fetch('https://api-e-shoes.adwebdev.fr/produits/enfant');
  const products = await data.json();

  return {
    props: {
      products,
    },
  };
};
