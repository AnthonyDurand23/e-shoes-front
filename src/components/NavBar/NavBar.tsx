import { useTypedDispatch } from '@/hooks/reduxHooks';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { closeMobileMenuModal } from '../../slices/interfaceSlice';

const NavBar = () => {
  const router = useRouter();
  const dispatch = useTypedDispatch();

  return (
    <nav className="navbar">
      <Link
        href="/"
        className={router.pathname === '/' ? 'navbar-active' : ''}
        onClick={() => dispatch(closeMobileMenuModal())}
      >
        Accueil
      </Link>
      <Link
        href="/femme"
        className={router.pathname === '/femme' ? 'navbar-active' : ''}
        onClick={() => dispatch(closeMobileMenuModal())}
      >
        Femme
      </Link>
      <Link
        href="/homme"
        className={router.pathname === '/homme' ? 'navbar-active' : ''}
        onClick={() => dispatch(closeMobileMenuModal())}
      >
        Homme
      </Link>
      <Link
        href="/enfant"
        className={router.pathname === '/enfant' ? 'navbar-active' : ''}
        onClick={() => dispatch(closeMobileMenuModal())}
      >
        Enfant
      </Link>
      {/* <Link
        href="/a-propos'"
        className={router.pathname === '/a-propos' ? 'navbar-active' : ''}
        onClick={() => dispatch(closeMobileMenuModal())}
      >
        A propos
      </Link> */}
      <Link
        href="/contact"
        className={router.pathname === '/contact' ? 'navbar-active' : ''}
        onClick={() => dispatch(closeMobileMenuModal())}
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
