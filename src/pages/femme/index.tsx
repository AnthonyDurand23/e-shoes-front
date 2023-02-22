import Head from 'next/head';

import CardsProducts from '@/components/CardsProducts/CardsProducts';

import products from '../../../public/assets/seeding.json';

const Woman = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="La page de chaussures pour femme de la boutique en ligne e-shoes" />
        <title>E-SHOES | Femme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="woman-body">
        <div className="woman-body-container">
          <h1 className="w-full h4 md:h3 xl:h2 text-center">Chaussures Femme</h1>
          {products.map((product) => (
            <CardsProducts
              key={product.reference}
              link={`/${product.reference}`}
              img={`/../public/assets/img/seeding/${product.photos[0]}.jpg`}
              altImageText={`photo chaussures ${product.nom}`}
              brand={product.marque}
              name={product.nom}
              category={product.categorie}
              price={Number(product.prix)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Woman;
