import Image from 'next/image';
import Link from 'next/link';

interface CardsProductsProps {
  link: string;
  img: string;
  altImageText: string;
  brand: string;
  name: string;
  category: string;
  price: number;
}

const CardsProducts: React.FC<CardsProductsProps> = ({ link, img, altImageText, brand, name, category, price }) => {
  return (
    <Link href={link} className="cards-products">
      <div className="relative h-[350px] rounded-lg overflow-hidden">
        <span className="relative px-2 py-1 z-10 p3-b bg-primary-700">Nouveau</span>
        <Image
          src={img}
          fill
          //placeholder="blur"
          className="object-cover"
          alt={altImageText}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>
      <div className="h-[82px] flex flex-col justify-between gap-2">
        <div className="flex justify-between p2-b">
          <p>{brand}</p>
          <p>{price.toFixed(2).replace('.', ',')} €</p>
        </div>
        <p className="p3-r uppercase">{name}</p>
        <p className="p3-r text-right">{category}</p>
      </div>
    </Link>
  );
};

export default CardsProducts;
