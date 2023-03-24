import Image from 'next/image';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';

import { useTypedDispatch, useTypedSelector } from '@/hooks/reduxHooks';
import { inputType } from '@/types/types';
import FormInput from '@/components/FormInput/FormInput';
import { usePostOrderMutation } from '@/services/productsApi';

import LoadingIcon from '../../../public/assets/img/Loading.svg';
import { deleteCart } from '@/slices/dataSlice';
import ResultCheckoutModal from '../ResultCheckoutModal/ResultCheckoutModal';
import { openResultCheckoutModal } from '@/slices/interfaceSlice';
import { getDeliveryDate } from '@/tools/tools';

const CheckoutForm = () => {
  const dispatch = useTypedDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const cart = useTypedSelector((state) => state.data.cart);
  const totalPriceCart = useTypedSelector((state) => state.data.totalPriceCart);
  const [postOrder, result] = usePostOrderMutation();
  const [values, setValues] = useState({
    // firstname: 'Marty',
    // lastname: 'MacFly',
    // address: '85 rue Riverside',
    // city: 'Hill Valley',
    // zipcode: '19555',
    // phone: '0123456789',
    // email: 'thony23@live.fr',
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    zipcode: '',
    phone: '',
    email: '',
  });
  const [paymentErrorMessage, setPaymentErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultCheckoutLink, setResultCheckoutLink] = useState('');
  const [resultCheckoutTitle, setResultCheckoutTitle] = useState('');
  const [resultCheckoutMessage, setResultCheckoutMessage] = useState('');

  const inputs: inputType[] = [
    {
      id: 0,
      name: 'firstname',
      type: 'text',
      placeholder: 'Prénom',
      errorMessage: '',
      label: 'Prénom *',
      required: true,
      classname: '',
    },
    {
      id: 1,
      name: 'lastname',
      type: 'text',
      placeholder: 'Nom',
      errorMessage: '',
      label: 'Nom *',
      required: true,
      classname: '',
    },
    {
      id: 2,
      name: 'address',
      type: 'text',
      placeholder: 'Adresse',
      errorMessage: '',
      label: 'Adresse *',
      required: true,
      classname: 'col-span-2',
    },
    {
      id: 3,
      name: 'city',
      type: 'text',
      placeholder: 'Ville',
      errorMessage: '',
      label: 'Ville *',
      required: true,
      classname: '',
    },
    {
      id: 4,
      name: 'zipcode',
      type: 'text',
      placeholder: 'Code Postal',
      errorMessage: '',
      label: 'Code Postal *',
      required: true,
      classname: '',
    },
    {
      id: 5,
      name: 'phone',
      type: 'tel',
      placeholder: 'Téléphone',
      pattern: '^(?:(?:(?:\\+|00)33[ ]?(?:\\(0\\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\\d{2}\\1?){3}\\d{2}$',
      errorMessage: 'Le numéro de téléphone est invalide',
      label: 'Téléphone *',
      required: true,
      classname: 'col-span-2 md:col-span-1',
    },
    {
      id: 6,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: "L'adresse mail est invalide",
      label: 'Email *',
      required: true,
      classname: 'col-span-2 md:col-span-1',
    },
  ];

  useEffect(() => {
    if (result.isLoading) setIsLoading(true);
    if (result.isSuccess) {
      setIsLoading(false);
      dispatch(deleteCart());
      setResultCheckoutLink('/');
      setResultCheckoutTitle('Paiement accepté');
      setResultCheckoutMessage(
        'Merci pour votre commande, nous vous avons envoyé un email avec votre numéro de commande et le détails de votre commande.'
      );
      dispatch(openResultCheckoutModal());
    } else if (result.isError) {
      setIsLoading(false);
      setResultCheckoutLink('/commande');
      if ('data' in result.error && result.error.data === 'Paiement échoué') {
        setResultCheckoutTitle('Paiement refusé');
        setResultCheckoutMessage(
          'Nous sommes désolé mais votre paiement a été refusé, veuillez ré-essayer avec un autre moyen de paiement. Merci.'
        );
      } else {
        setResultCheckoutMessage(
          'Nous sommes désolé mais un problème est survenu lors de votre commande, veuillez ré-essayer. Merci.'
        );
      }
      dispatch(openResultCheckoutModal());
    }
  }, [result]);

  const handleInputChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const cardElement = elements?.getElement(CardElement);
    if (!cardElement) return;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (!error) {
      postOrder({
        ...values,
        cart: cart.map(({ reference, name, size, quantity, photo, price }) => {
          return {
            reference,
            name,
            size,
            quantity,
            photoUrl: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${photo}.jpg`,
            price: (price * quantity).toFixed(2).toString().replace('.', ','),
          };
        }),
        totalPriceCart: Number(totalPriceCart.toFixed(2)),
        paymentId: paymentMethod.id,
        deliveryDate: getDeliveryDate(),
      });
    } else {
      console.log(error.message);
      if (error.message && error.type === 'validation_error') setPaymentErrorMessage(error.message);
      else {
        setResultCheckoutLink('/commande');
        setResultCheckoutTitle('Paiement refusé');
        setResultCheckoutMessage(
          'Nous sommes désolé mais un problème est survenu lors du paiement, merci de rentrer à nouveau votre moyen de paiement.'
        );
        dispatch(openResultCheckoutModal());
      }
    }
    if (error?.type !== 'validation_error') cardElement.clear();
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <section>
          <h2 className="mb-3 xl:mb-5 h5 xl:h4">Informations de livraison</h2>
          <div className="mb-7 grid grid-cols-2 gap-3 xl:gap-5">
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
                onChange={(event) => handleInputChange(event.target.name, event.target.value)}
                classname={input.classname}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-3 xl:mb-5 h5 xl:h4">Informations de paiement</h2>
          <CardElement
            options={{ hidePostalCode: true }}
            className="mt-2 px-3 py-3 xl:py-4 input"
            onChange={() => setPaymentErrorMessage('')}
          />
          {paymentErrorMessage && <span className="p3-r text-validation-red">{paymentErrorMessage}</span>}
        </section>
        <button
          type="submit"
          disabled={result.isLoading || result.isSuccess || !totalPriceCart}
          className={`bp-sm md:bp-lg min-w-full mt-7 xl:mt-9 flex items-center justify-center uppercase ${
            result.isSuccess &&
            'hover:scale-100 md:hover:scale-100 hover:cursor-default md:hover:cursor-default opacity-70'
          }`}
        >
          {isLoading && <Image className="mr-5 animate-spin" src={LoadingIcon} alt="icône chargement" />}
          Payer {totalPriceCart.toFixed(2).replace('.', ',')} €
        </button>
      </form>
      <ResultCheckoutModal link={resultCheckoutLink} title={resultCheckoutTitle} message={resultCheckoutMessage} />
    </div>
  );
};

export default CheckoutForm;
