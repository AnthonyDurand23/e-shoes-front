import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="navbar">
      <Link href="/" className={router.pathname === '/' ? 'navbar-active' : ''}>
        Accueil
      </Link>
      <Link href="/femme" className={router.pathname === '/femme' ? 'navbar-active' : ''}>
        Femme
      </Link>
      <Link href="/homme" className={router.pathname === '/homme' ? 'navbar-active' : ''}>
        Homme
      </Link>
      <Link href="/enfant" className={router.pathname === 'enfant' ? 'navbar-active' : ''}>
        Enfant
      </Link>
      <Link href="/a-propos'" className={router.pathname === '/a-propos' ? 'navbar-active' : ''}>
        A propos
      </Link>
      <Link href="/contact" className={router.pathname === '/contact' ? 'navbar-active' : ''}>
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
