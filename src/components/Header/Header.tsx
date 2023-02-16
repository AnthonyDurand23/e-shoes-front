import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NavBar from '../NavBar/NavBar';
import MobileMenuModal from '../MobileMenuModal/MobileMenuModal';

import Logo from '../../../public/assets/img/Logo_e-shoes.png';
import CartIcon from '../../../public/assets/img/Shopping_cart.svg';
import MenuIcon from '../../../public/assets/img/Menu.svg';

const Header = () => {
  const [showMobileMenuModal, setShowMobileMenuModal] = useState(false);
  const initialFocusModal = useRef(null);

  return (
    <header className="header">
      <div className="w-[100px] xl:w-[134px] h-[60px] xl:h-[80px] relative">
        <Link href="/">
          <Image src={Logo} alt="logo du site" fill />
        </Link>
      </div>
      <div className="max-md:hidden">
        <NavBar />
      </div>
      <div className="flex gap-5 text-neutrals-900">
        <div className="flex items-center gap-1 cursor-pointer">
          <Image src={CartIcon} alt="icône panier" className="xl:w-[30px]" />
          <Link href="/panier" className="h6 xl:h5">
            Panier
          </Link>
        </div>
        <div className="cursor-pointer md:hidden">
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
