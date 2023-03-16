import Head from 'next/head';
import StripeContainer from '@/components/Stripe/StripeContainer';

const Order = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="La page commande de la boutique en ligne e-shoes" />
        <title>E-SHOES | Commande</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="order-body">
        <div className="order-body-container">
          <StripeContainer />
        </div>
      </section>
    </>
  );
};

export default Order;
