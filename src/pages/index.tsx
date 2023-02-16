import Head from 'next/head';
import Image from 'next/image';

//import HeroImg from '../../../public/assets/img/Hero.jpg';

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
      {/* <section className="absolute top-[100px] w-full h-[calc(100vh-100px)]">
        <Image
          src={HeroImg}
          fill
          placeholder="blur"
          className="object-cover -z-10 brightness-75"
          alt="photo pizza page d'accueil"
        />
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="mb-5 text-7xl text-white-plain font-title">Food de Pizzas</h1>
          <h2 className="mb-10 text-3xl font-medium text-white-plain">La pizza 100% faite maison !</h2>
          <div className="flex justify-center items-center gap-7">
            <button className="w-44 px-5 py-3 rounded-full text-sm text-white-plain uppercase font-medium bg-mp-orange">
              Nous localiser
            </button>
            <button className="w-44 px-5 py-3 rounded-full text-sm uppercase font-medium bg-white-plain">
              Voir le menu
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
