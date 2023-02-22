import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTypedDispatch, useTypedSelector } from '@/hooks/reduxHooks';

import NavBar from '../NavBar/NavBar';
import MobileMenuModal from '../MobileMenuModal/MobileMenuModal';

import { openMobileMenuModal } from '@/slices/interfaceSlice';

import Logo from '../../../public/assets/img/Logo_e-shoes.png';
import CartIcon from '../../../public/assets/img/Shopping_cart.svg';
import MenuIcon from '../../../public/assets/img/Menu.svg';

const Header = () => {
  const initialFocusModal = useRef(null);
  const isMobileMenuModalOpen = useTypedSelector((state) => state.interface.isMobileMenuModalOpen);
  const dispatch = useTypedDispatch();

  return (
    <header className="header">
      <div className="header-content">
        <div className="w-[100px] xl:w-[134px] h-[60px] xl:h-[80px]">
          <Link href="/">
            <Image src={Logo} alt="logo du site" />
          </Link>
        </div>
        <div className="maxmd:hidden">
          <NavBar />
        </div>
        {!isMobileMenuModalOpen && (
          <div className="flex gap-5 text-neutrals-900">
            <div className="flex items-center gap-1 cursor-pointer hover:scale-105 transition-all duration-200">
              <Image src={CartIcon} alt="icône panier" className="xl:w-[30px]" />
              <Link href="/panier" className="h6 xl:h5">
                Panier
              </Link>
            </div>
            <div className="cursor-pointer md:hidden">
              <Image src={MenuIcon} alt="icône menu mobile" onClick={() => dispatch(openMobileMenuModal())} />
            </div>
          </div>
        )}
        <MobileMenuModal initialFocusModal={initialFocusModal} />
      </div>
    </header>
  );
};

export default Header;
