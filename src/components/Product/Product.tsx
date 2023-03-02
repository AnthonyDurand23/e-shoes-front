import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useTypedDispatch } from '@/hooks/reduxHooks';
import { addToCart } from '@/slices/dataSlice';
import { ProductType, SelectOptionType } from '@/types/types';
import Select from '../Select/Select';
import ProductDetails from './ProductDetails/ProductDetails';

interface ProductProps {
  product: ProductType;
  sizes: SelectOptionType[];
}

const Product: React.FC<ProductProps> = ({ product, sizes }) => {
  const dispatch = useTypedDispatch();
  const [selectedImg, setselectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState({ id: 0, value: 'Taille', unavailable: false });
  const [sizeAlert, setSizeAlert] = useState(false);

  useEffect(() => {
    if (selectedSize.id !== 0) setSizeAlert(false);
  }, [selectedSize]);

  const handleSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (selectedSize.id === 0) {
      setSizeAlert(true);
    } else {
      dispatch(
        addToCart({
          reference: product.reference,
          size: selectedSize.value,
        })
      );
    }
  };

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={`La page de l'article: ${product.nom}`} />
        <title>{`E-SHOES | Article: ${product.nom}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="product-body">
        <article className="product-body-container">
          <div className="w-full md:w-[60%] flex gap-2">
            <ul className="w-fit h-full flex flex-col gap-2">
              {product.photos.split('|').map((photo, index) => (
                <li
                  className={`w-[50px] md:w-[75px] xl:w-[100px] h-[50px] md:h-[75px] xl:h-[100px] relative cursor-pointer ${
                    index === selectedImg ? 'border' : ''
                  }`}
                  key={uuidv4()}
                  onMouseEnter={() => setselectedImg(index)}
                >
                  <Image
                    key={uuidv4()}
                    src={`https://res.cloudinary.com/doemagjfj/image/upload/v1677079486/e-shoes/${photo}.jpg`}
                    fill
                    alt={`photo chaussures ${product.nom}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </li>
              ))}
            </ul>
            <div className="relative w-full min-h-[398px] md:min-h-[573px] xl:min-h-[748px] shadow-md">
              <Image
                src={`https://res.cloudinary.com/doemagjfj/image/upload/v1677079486/e-shoes/${
                  product.photos.split('|')[selectedImg]
                }.jpg`}
                fill
                priority
                alt={`photo chaussures ${product.nom}`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="w-full md:w-[40%]">
            <div className="pt-8 md:pt-0 flex flex-col gap-4">
              <h2 className="h5 md:h4 xl:h3">{product.marque}</h2>
              <h2 className="h5 md:h4 xl:h3 uppercase">{product.nom}</h2>
              <h3 className="h6 md:h5 xl:h4">
                {product.categories.length > 1 ? (
                  product.categories.map((categorie, index) => (
                    <span key={uuidv4()}>
                      {index !== 0 ? ' - ' : ''}
                      {categorie}
                    </span>
                  ))
                ) : (
                  <span>{product.categories[0]}</span>
                )}
              </h3>
              <form method="post" className="flex flex-col gap-2 md:gap-4" onSubmit={handleSubmitForm}>
                <div className="flex justify-between items-center">
                  <p className="h5 md:h4 xl:h3">{product.prix.toFixed(2).replace('.', ',')} €</p>
                  <Select
                    name="taille"
                    classname="relative w-24 xl:w-32 mt-1 p3-r md:p2-r xl:p1-r bg-neutrals-white"
                    selectedOption={selectedSize}
                    setSelectedOption={setSelectedSize}
                    options={sizes}
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <button type="submit" className="bp-sm xl:bp-lg">
                    Ajouter au panier
                  </button>
                  {sizeAlert && <p className="p2-b text-validation-red">Veuillez choisir une taille</p>}
                </div>
              </form>
            </div>
            <div className="pt-8">
              <ProductDetails product={product} />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Product;
