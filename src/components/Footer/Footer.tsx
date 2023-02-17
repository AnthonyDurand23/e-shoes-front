import Link from 'next/link';

const Footer = () => {
  return (
    <header className="footer">
      <div className="footer-content">
        <p>2023 | E-SHOES</p>
        <div className="footer-content-links">
          <Link href="/mentions-legales">Mentions légales</Link>
          <p className="maxmd:hidden">|</p>
          <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          <p className="maxmd:hidden">|</p>
          <Link href="/cgv">Conditions générales de vente</Link>
        </div>
      </div>
    </header>
  );
};

export default Footer;
