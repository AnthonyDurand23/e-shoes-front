import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  link: string;
  img: StaticImageData;
  altImageText: string;
  title: string;
  className: string;
}

const Card: React.FC<CardProps> = ({ link, img, altImageText, title, className }) => {
  return (
    <Link href={link} className={className}>
      <Image
        src={img}
        fill
        placeholder="blur"
        className="object-cover -z-10"
        alt={altImageText}
        sizes="(max-width: 768px) 100vw, max-width: 1280px) 50vw, 33vw"
      />
      <p className="home-card-title">{title}</p>
    </Link>
  );
};

export default Card;
