import Head from 'next/head';
import ContactMap from '@/components/ContactMap/ContactMap';

const Contact = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="La page contact de la boutique en ligne e-shoes" />
        <title>E-SHOES | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="contact-body">
        <div className="contact-body-container">
          <ContactMap />
        </div>
      </section>
    </>
  );
};

export default Contact;
