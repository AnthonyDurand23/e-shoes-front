import Head from 'next/head';
import Image from 'next/image';

import HeroImg from '../../public/assets/img/Hero.jpg';
import ArrowForwardIcon from '../../public/assets/img/Arrow_forward.svg';

const Home = () => {
  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="La page d'accueil de la boutique en ligne e-shoes" />
        <title>E-SHOES | Accueil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <Image
          src={HeroImg}
          fill
          placeholder="blur"
          className="object-cover -z-10 brightness-75"
          alt="photo chaussures page d'accueil"
        />
        <div className="hero-content">
          <div className="md:w-3/4 xl:w-1/2 p-4 flex flex-col gap-8 text-neutrals-100">
            <h1 className="h3 md:h2 xl:h1">Lorem ipsum dolor sit amet</h1>
            <p className="p2-b md:p1-b">
              Lorem ipsum dolor sit amet consectetur. Amet tortor pellentesque adipiscing tortor.
            </p>
            <button className="bp-sm md:bp-lg flex items-center gap-2">
              Découvrir
              <Image src={ArrowForwardIcon} alt="icône flêche en avant" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
