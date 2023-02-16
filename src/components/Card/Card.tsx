import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  link: string;
  img: StaticImageData;
  altImageText: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ link, img, altImageText, title }) => {
  return (
    <Link href={link} className="card">
      <Image src={img} fill placeholder="blur" className="object-cover -z-10" alt={altImageText} />
      <p className="card-title">{title}</p>
    </Link>
  );
};

export default Card;
