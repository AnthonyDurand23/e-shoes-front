import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>2023 | E-SHOES</p>
        <div className="footer-content-links">
          <Link href="/">Mentions légales</Link>
          <p className="maxmd:hidden">|</p>
          <Link href="/">Politique de confidentialité</Link>
          <p className="maxmd:hidden">|</p>
          <Link href="/">Conditions générales de vente</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
