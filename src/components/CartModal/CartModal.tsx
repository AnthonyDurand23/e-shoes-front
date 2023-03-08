import { v4 as uuidv4 } from 'uuid';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTypedDispatch, useTypedSelector } from '@/hooks/reduxHooks';

import { closeCartModal } from '../../slices/interfaceSlice';
import CartProduct from '../CartProduct/CartProduct';

const CartModal = () => {
  const isCartModalOpen = useTypedSelector((state) => state.interface.isCartModalOpen);
  const onHoverCartLink = useTypedSelector((state) => state.interface.onHoverCartLink);
  const cart = useTypedSelector((state) => state.data.cart);
  const [onHoverCartModal, setOnHoverCartModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (!onHoverCartModal && !onHoverCartLink) {
      const modalTimer = setTimeout(() => {
        dispatch(closeCartModal());
      }, 2000);
      return () => clearTimeout(modalTimer);
    }
  });

  useEffect(() => {
    let total = 0;
    cart.forEach(({ price, quantity }) => {
      total = total + price * quantity;
    });
    setTotalPrice(total);
  }, [cart]);

  return (
    <Transition show={isCartModalOpen} as={Fragment}>
      <Dialog onClose={() => dispatch(closeCartModal())}>
        {window.innerWidth < 1280 && (
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-30 bg-neutrals-900 bg-opacity-30" aria-hidden="true" />
          </Transition.Child>
        )}
        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition ease-in duration-200"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
        >
          <Dialog.Panel
            className="cartModal"
            onMouseEnter={() => setOnHoverCartModal(true)}
            onMouseLeave={() => setOnHoverCartModal(false)}
          >
            <Dialog.Title className="hidden">Mon panier</Dialog.Title>
            <Dialog.Description className="hidden">Affichage du panier</Dialog.Description>
            <h3 className="mb-4 flex justify-center h6 md:h5 uppercase">Mon Panier</h3>
            {!!cart.length ? (
              <div className="max-h-[50vh] flex flex-col gap-6 overflow-y-auto scrollbar-hidden">
                {cart.map((product, index) => (
                  <CartProduct key={uuidv4()} product={product} productIndex={index} />
                ))}
              </div>
            ) : (
              <p className="text-center">Votre panier est vide</p>
            )}
            <div className="w-full mt-3 pt-4 flex flex-col gap-2 border-t-2 border-neutrals-500">
              <div className="flex justify-between p3-r md:p2-r">
                <p>Livraison</p>
                <p>0,00 €</p>
              </div>
              <div className="flex justify-between p2-b md:p2-b">
                <p>Total</p>
                <p>{totalPrice.toFixed(2).replace('.', ',')} €</p>
              </div>
              <button className="bp-lg min-w-full mt-2 uppercase">Mon panier</button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default CartModal;
