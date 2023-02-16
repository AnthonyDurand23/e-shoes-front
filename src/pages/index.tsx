import Head from 'next/head';
import Image from 'next/image';

import Card from '../components/Card/Card';

import HeroImg from '../../public/assets/img/Hero.jpg';
import ArrowForwardIcon from '../../public/assets/img/Arrow_forward.svg';
import FeaturesImg from '../../public/assets/img/Features.jpg';
import BestSellersImg from '../../public/assets/img/Best_sellers.jpg';
import WomanShoesImg from '../../public/assets/img/Woman_shoes.jpg';
import ManShoesImg from '../../public/assets/img/Man_shoes.jpg';
import ChildShoesImg from '../../public/assets/img/Child_shoes.jpg';

const Home = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="La page d'accueil de la boutique en ligne e-shoes" />
        <title>E-SHOES | Accueil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <Image src={HeroImg} fill placeholder="blur" className="object-cover -z-10 brightness-75" alt="" />
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
      <section className="relative top-[100vh] p-6 md:p-8 xl:p-14 flex flex-col gap-4">
        <Card link="/nouveautes" img={FeaturesImg} altImageText="photo nouveautés" title="Nouveautés" />
        <Card
          link="/meilleures-ventes"
          img={BestSellersImg}
          altImageText="photo meilleures ventes"
          title="Meilleures ventes"
        />
        <Card link="femme" img={WomanShoesImg} altImageText="photo chaussures femmes" title="Femme" />
        <Card link="homme" img={ManShoesImg} altImageText="photo chaussures hommes" title="Homme" />
        <Card link="enfant" img={ChildShoesImg} altImageText="photo chaussures enfants" title="Enfant" />
      </section>
    </>
  );
};

export default Home;
