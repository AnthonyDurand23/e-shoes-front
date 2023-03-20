// import { useEffect } from 'react';
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

// import { useTypedDispatch } from '@/hooks/reduxHooks';
// import { useGetProductsQuery } from '@/services/productsApi';
// import { getProducts } from '@/slices/dataSlice';

const Home = () => {
  // const dispatch = useTypedDispatch();
  // const productsRequestResults = useGetProductsQuery(null);

  // useEffect(() => {
  //   const { data: products } = productsRequestResults;
  //   if (products) dispatch(getProducts(products));
  // }, [productsRequestResults]);

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
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="h3 md:h2 xl:h1">Lorem ipsum dolor sit amet</h1>
            <p className="p2-b md:p1-b">
              Lorem ipsum dolor sit amet consectetur. Amet tortor pellentesque adipiscing tortor.
            </p>
            <button
              type="button"
              className="bp-sm md:bp-lg flex items-center gap-2"
              onClick={() => window.scroll({ behavior: 'smooth', top: window.innerHeight - 60 })}
            >
              Découvrir
              <Image src={ArrowForwardIcon} alt="icône flêche en avant" />
            </button>
          </div>
        </div>
      </section>
      <section className="home-body">
        <div className="home-body-container">
          {/* <Card
            link="/nouveautes"
            img={FeaturesImg}
            altImageText="photo nouveautés"
            title="Nouveautés"
            className="home-card home-card--top"
          />
          <Card
            link="/top-ventes"
            img={BestSellersImg}
            altImageText="photo top ventes"
            title="Top ventes"
            className="home-card home-card--top"
          /> */}
          <Card
            link="femme"
            img={WomanShoesImg}
            altImageText="photo chaussures femmes"
            title="Femme"
            className="home-card home-card--bottom"
          />
          <Card
            link="homme"
            img={ManShoesImg}
            altImageText="photo chaussures hommes"
            title="Homme"
            className="home-card home-card--bottom"
          />
          <Card
            link="enfant"
            img={ChildShoesImg}
            altImageText="photo chaussures enfants"
            title="Enfant"
            className="home-card home-card--bottom"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
