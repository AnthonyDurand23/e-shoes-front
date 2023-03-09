import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { useTypedDispatch } from '@/hooks/reduxHooks';
import { getCartFromLocalStorage } from '@/slices/dataSlice';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getCartFromLocalStorage());
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
