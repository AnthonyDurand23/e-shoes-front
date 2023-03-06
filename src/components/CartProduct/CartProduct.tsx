import { useEffect, useState } from 'react';
import Image from 'next/image';

import Select from '../Select/Select';

import { getSizesByGender } from '@/tools/tools';
import { CartProduct } from '@/types/types';
import { useTypedDispatch } from '@/hooks/reduxHooks';
import { modifySizeCartItem } from '@/slices/dataSlice';

interface CartProductProps {
  product: CartProduct;
  productIndex: number;
}

const CartProduct: React.FC<CartProductProps> = ({ product, productIndex }) => {
  const sizes = getSizesByGender(product.gender);
  const [selectedSize, setSelectedSize] = useState({
    id: sizes.find((size) => size.value === product.size.toString())?.id || 0,
    value: product.size.toString(),
    unavailable: sizes.find((size) => size.value === product.size.toString())?.unavailable || false,
  });
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (product.size.toString() === selectedSize.value) return;
    dispatch(
      modifySizeCartItem({
        productIndex,
        size: Number(selectedSize.value),
      })
    );
  }, [selectedSize]);

  return (
    <article>
      <div className="relative w-[75px] h-[75px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${product.photo}.jpg`}
          fill
          priority
          alt={`photo chaussures ${product.name}`}
          sizes="33vw"
        />
      </div>
      <div>
        <p>{product.brand}</p>
        <p>{product.name}</p>
        <Select
          name="size"
          classname="relative w-36 xl:w-32 mt-1 p3-r md:p2-r xl:p1-r"
          label="Taille"
          selectedOption={selectedSize}
          setSelectedOption={setSelectedSize}
          options={sizes}
        />
      </div>
    </article>
  );
};

export default CartProduct;
