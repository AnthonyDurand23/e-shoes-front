import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MobileMenuModal from '../MobileMenuModal/MobileMenuModal';

import Logo from '../../../public/assets/img/Logo_e-shoes.png';
import CartIcon from '../../../public/assets/img/Shopping_cart.svg';
import MenuIcon from '../../../public/assets/img/Menu.svg';

const Header = () => {
  const [showMobileMenuModal, setShowMobileMenuModal] = useState(false);
  const initialFocusModal = useRef(null);

  return (
    <header className="header">
      <div className="w-[100px] h-[60px] relative ml-4">
        <Link href="/">
          <Image src={Logo} alt="logo du site" fill />
        </Link>
      </div>
      <div className="mr-4 flex gap-5 text-neutrals-900">
        <div className="flex items-center gap-1 cursor-pointer">
          <Image src={CartIcon} alt="icône panier" />
          <Link href="/panier" className="h6">
            Panier
          </Link>
        </div>
        <div className="cursor-pointer">
          <Image src={MenuIcon} alt="icône menu mobile" onClick={() => setShowMobileMenuModal(true)} />
        </div>
      </div>
      <MobileMenuModal
        showMobileMenuModal={showMobileMenuModal}
        setShowMobileMenuModal={setShowMobileMenuModal}
        initialFocusModal={initialFocusModal}
      />
    </header>
  );
};

export default Header;
