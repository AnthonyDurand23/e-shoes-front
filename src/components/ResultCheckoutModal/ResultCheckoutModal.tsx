import { Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { useTypedDispatch, useTypedSelector } from '@/hooks/reduxHooks';

import { closeResultCheckoutModal } from '../../slices/interfaceSlice';

interface ResultCheckoutModalProps {
  link: string;
  title: string;
  message: string;
}

const ResultCheckoutModal: React.FC<ResultCheckoutModalProps> = ({ link, title, message }) => {
  const isResultCheckoutModalOpen = useTypedSelector((state) => state.interface.isResultCheckoutModalOpen);
  const dispatch = useTypedDispatch();

  return (
    <Transition show={isResultCheckoutModalOpen} as={Fragment}>
      <Dialog as="div" className="relative" onClose={() => false}>
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
        <div className="fixed inset-0 z-40 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="result-checkout-modal">
                <Dialog.Title as="h3" className="h5 md:h4">
                  {title}
                </Dialog.Title>
                <Dialog.Description className="hidden">
                  Affichage du message de validation du paiement
                </Dialog.Description>
                <p className="p3-r md:p2-r">{message}</p>
                <Link
                  href={link}
                  className="bp-sm min-w-[25%] flex items-center justify-center"
                  onClick={() => dispatch(closeResultCheckoutModal())}
                >
                  OK
                </Link>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ResultCheckoutModal;
