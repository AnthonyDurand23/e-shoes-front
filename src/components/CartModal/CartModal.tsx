import { v4 as uuidv4 } from 'uuid';
import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTypedDispatch, useTypedSelector } from '@/hooks/reduxHooks';

import { closeCartModal } from '../../slices/interfaceSlice';
import CartProduct from '../CartProduct/CartProduct';

const CartModal = () => {
  const isCartModalOpen = useTypedSelector((state) => state.interface.isCartModalOpen);
  const cart = useTypedSelector((state) => state.data.cart);
  const dispatch = useTypedDispatch();

  // useEffect(() => {
  //   const modalTimer = setTimeout(() => {
  //     dispatch(closeCartModal());
  //   }, 5000);
  //   return () => clearTimeout(modalTimer);
  // });

  console.log(cart);

  return (
    <Transition show={isCartModalOpen} as={Fragment}>
      <Dialog onClose={() => dispatch(closeCartModal())}>
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
        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition ease-in duration-200"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
        >
          <Dialog.Panel className="cartModal">
            <Dialog.Title className="hidden">Mon panier</Dialog.Title>
            <Dialog.Description className="hidden">Affichage du panier</Dialog.Description>
            <h3 className="flex justify-center h6 uppercase">Mon Panier</h3>
            <div>
              {cart.map((product, index) => (
                <CartProduct key={uuidv4()} product={product} productIndex={index} />
              ))}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default CartModal;
