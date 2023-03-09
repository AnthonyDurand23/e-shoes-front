import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import Head from 'next/head';

import { useTypedDispatch, useTypedSelector } from '@/hooks/reduxHooks';
import { deleteCart } from '@/slices/dataSlice';

import CartProduct from '@/components/CartProduct/CartProduct';

dayjs.locale('fr');

const Cart = () => {
  const cart = useTypedSelector((state) => state.data.cart);
  const nbProductsCart = useTypedSelector((state) => state.data.nbProductsCart);
  const totalPriceCart = useTypedSelector((state) => state.data.totalPriceCart);
  const dispatch = useTypedDispatch();

  const getDeliveryDate = () => {
    let deliveryTime = 3;
    if (dayjs().add(deliveryTime, 'day').format('dddd') === 'dimanche') deliveryTime = 4;
    return dayjs()
      .add(deliveryTime, 'day')
      .format('dddd D MMMM')
      .split(' ')
      .map((el) => el.charAt(0).toUpperCase() + el.substring(1).toLowerCase())
      .join(' ');
  };

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="La page panier de la boutique en ligne e-shoes" />
        <title>E-SHOES | Panier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="cart-body">
        <div className="cart-body-container">
          <div className="md:w-[60%]">
            <div className="mb-4 xl:mb-8 flex justify-between items-center">
              <h3 className="flex h5 md:h4 xl:h3">{`Mon panier (${nbProductsCart} article${
                nbProductsCart > 1 ? 's' : ''
              })`}</h3>
              <p className="p3-r md:p2-r xl:p1-r cursor-pointer" onClick={() => dispatch(deleteCart())}>
                Vider
              </p>
            </div>
            {!!cart.length ? (
              <div className="flex flex-col gap-3 md:gap-6">
                {cart.map((product, index) => (
                  <>
                    <CartProduct key={uuidv4()} product={product} productIndex={index} />
                    {index + 1 !== cart.length && <div className="border-b border-neutrals-700"></div>}
                  </>
                ))}
              </div>
            ) : (
              <p className="text-center">Votre panier est vide</p>
            )}
          </div>
          <div className="md:border-r-2 md:border-neutrals-500"></div>
          <div className="w-full md:w-[40%] mt-3 md:mt-0 pt-4 md:pt-0 flex flex-col gap-4 xl:gap-8 border-t-2 md:border-none border-neutrals-500">
            <h3 className="h5 md:h4 xl:h3">Total</h3>
            <div className="flex justify-between p3-r md:p2-r xl:p1-r">
              <p>Sous-total</p>
              <p>{totalPriceCart.toFixed(2).replace('.', ',')} €</p>
            </div>
            <div className="flex justify-between p3-r md:p2-r xl:p1-r">
              <p>Livraison</p>
              <p>0,00 €</p>
            </div>
            {!!cart.length && (
              <div className="flex justify-between p3-r md:p2-r xl:p1-r md:gap-4">
                <p>Jour de livraison estimé</p>
                <p className="md:text-right">{getDeliveryDate()}</p>
              </div>
            )}
            <div className="flex justify-between p2-b md:p1-b">
              <p>{`Total (TVA incluse)`}</p>
              <p>{totalPriceCart.toFixed(2).replace('.', ',')} €</p>
            </div>
            <button className="bp-sm md:bp-lg min-w-full mt-2 uppercase">Commander</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
