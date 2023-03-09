import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head';
import { useState } from 'react';

import { inputType } from '@/types/types';
import FormInput from '@/components/FormInput/FormInput';

const Order = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    zipcode: '',
    phone: '',
    email: '',
  });

  const inputs: inputType[] = [
    {
      id: 0,
      name: 'firstname',
      type: 'text',
      placeholder: 'Prénom',
      errorMessage: '',
      label: 'Prénom *',
      required: true,
    },
    {
      id: 1,
      name: 'lastname',
      type: 'text',
      placeholder: 'Nom',
      errorMessage: '',
      label: 'Nom *',
      required: true,
    },
    {
      id: 2,
      name: 'address',
      type: 'text',
      placeholder: 'Adresse',
      errorMessage: '',
      label: 'Adresse *',
      required: true,
    },
    {
      id: 3,
      name: 'city',
      type: 'text',
      placeholder: 'Ville',
      errorMessage: '',
      label: 'Ville *',
      required: true,
    },
    {
      id: 4,
      name: 'zipcode',
      type: 'text',
      placeholder: 'Code Postal',
      errorMessage: '',
      label: 'Code Postal *',
      required: true,
    },
    {
      id: 5,
      name: 'phone',
      type: 'tel',
      placeholder: 'Téléphone',
      errorMessage: 'Le numéro de téléphone est invalide',
      label: 'Téléphone *',
      required: true,
    },
    {
      id: 6,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: "L'adresse mail est invalide",
      label: 'Email *',
      required: true,
    },
  ];

  const handleInputChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  console.log(values);

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
          <form onSubmit={handleSubmitForm}>
            <section>
              <h2 className="h5">Informations de livraison</h2>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  errorMessage={input.errorMessage}
                  label={input.label}
                  pattern={input.pattern}
                  required={input.required}
                  value={values[input.name]}
                  onChange={handleInputChange}
                />
              ))}
              <button
                type="submit"
                className="bp-sm md:bp-lg min-w-full mt-7 flex items-center justify-center uppercase"
              >
                Valider la commande
              </button>
            </section>
          </form>
        </div>
      </section>
    </>
  );
};

export default Order;
