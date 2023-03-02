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
  const cart = useTypedSelector((state) => state.data.cart);
  const products = useTypedSelector((state) => state.data.products);
  const dispatch = useTypedDispatch();

  const displayCart = () => {
    console.log(
      cart.map((item) => {
        const product = products.find(({ reference }) => reference === item.reference);
        return {
          marque: product?.marque,
          nom: product?.nom,
          prix: product?.prix,
          taille: item.size,
        };
      })
    );
  };

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
            <Link
              /*href="/panier"*/
              href=""
              className="relative h6 xl:h5 flex items-center gap-1 cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={displayCart}
            >
              <Image src={CartIcon} alt="icône panier" className="xl:w-[30px]" />
              {cart.length !== 0 && (
                <div className="absolute top-0 left-3 xl:left-4 w-[15px] h-[15px] flex justify-center items-center rounded-full bg-primary-700 p4-b">
                  {cart.length}
                </div>
              )}
              Panier
            </Link>
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
