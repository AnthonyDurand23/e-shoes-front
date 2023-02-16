import { Fragment, RefObject } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

import NavBar from '../NavBar/NavBar';

import CloseIcon from '../../../public/assets/img/Close.svg';

interface MobileMenuModalProps {
  showMobileMenuModal: boolean;
  setShowMobileMenuModal: (value: boolean) => void;
  initialFocusModal: RefObject<HTMLDivElement>;
}

const MobileMenuModal: React.FC<MobileMenuModalProps> = ({
  showMobileMenuModal,
  setShowMobileMenuModal,
  initialFocusModal,
}) => {
  return (
    <Transition show={showMobileMenuModal} as={Fragment}>
      <Dialog initialFocus={initialFocusModal} onClose={() => setShowMobileMenuModal(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-10 bg-neutrals-900 bg-opacity-30" aria-hidden="true" />
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
          <Dialog.Panel className="mobileMenuModal">
            <Dialog.Title className="hidden">Menu de navigation</Dialog.Title>
            <Dialog.Description className="hidden">Affichage du menu de navigation</Dialog.Description>
            <div ref={initialFocusModal} className="flex items-start justify-between">
              <NavBar />
              <Image src={CloseIcon} alt="icône fermer menu mobile" onClick={() => setShowMobileMenuModal(false)} />
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default MobileMenuModal;
