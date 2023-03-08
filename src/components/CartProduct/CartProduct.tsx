import { useEffect, useState } from 'react';
import Image from 'next/image';

import Select from '../Select/Select';

import { getSizesByGender } from '@/tools/tools';
import { CartProduct } from '@/types/types';
import { useTypedDispatch, useTypedSelector } from '@/hooks/reduxHooks';
import { deleteProductToCart, modifyQuantityCartProduct, modifySizeCartProduct } from '@/slices/dataSlice';

import DeleteIcon from '../../../public/assets/img/Delete.svg';

const quantities = [
  { id: 1, value: '1', unavailable: false },
  { id: 2, value: '2', unavailable: false },
  { id: 3, value: '3', unavailable: false },
  { id: 4, value: '4', unavailable: false },
  { id: 5, value: '5', unavailable: false },
];

interface CartProductProps {
  product: CartProduct;
  productIndex: number;
}

const CartProduct: React.FC<CartProductProps> = ({ product, productIndex }) => {
  const isCartModalOpen = useTypedSelector((state) => state.interface.isCartModalOpen);
  const sizes = getSizesByGender(product.gender);
  const [selectedSize, setSelectedSize] = useState({
    id: sizes.find((size) => size.value === product.size.toString())?.id || 0,
    value: product.size.toString(),
    unavailable: sizes.find((size) => size.value === product.size.toString())?.unavailable || false,
  });
  const [selectedQuantity, setSelectedQuantity] = useState({
    id: quantities.find((quantity) => quantity.value === product.quantity.toString())?.id || 0,
    value: product.quantity.toString(),
    unavailable: false,
  });
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (product.size.toString() === selectedSize.value) return;
    dispatch(
      modifySizeCartProduct({
        productIndex,
        size: Number(selectedSize.value),
      })
    );
  }, [selectedSize]);

  useEffect(() => {
    if (product.quantity.toString() === selectedQuantity.value) return;
    dispatch(
      modifyQuantityCartProduct({
        productIndex,
        quantity: Number(selectedQuantity.value),
      })
    );
  }, [selectedQuantity]);

  return (
    <article className="flex gap-4">
      <div className="relative min-w-[75px] h-[100px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}${product.photo}.jpg`}
          fill
          priority
          alt={`photo chaussures ${product.name}`}
          sizes="33vw"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="p4-b">{product.brand}</p>
          <p className="p4-b">{(product.price * product.quantity).toFixed(2).replace('.', ',')} €</p>
        </div>
        <p className="p4-b uppercase">{product.name}</p>
        <div className="flex justify-between">
          {isCartModalOpen ? (
            <div className="p4-r">
              <div className="flex gap-2">
                <p>Taille :</p>
                <p>{product.size}</p>
              </div>
              <div className="flex gap-2">
                <p>Quantité :</p>
                <p>{product.quantity}</p>
              </div>
            </div>
          ) : (
            <div>
              <Select
                name="size"
                classname="relative w-20 mt-1 p4-r"
                label="Taille :"
                labelClassname="p4-r"
                selectedOption={selectedSize}
                setSelectedOption={setSelectedSize}
                options={sizes}
              />
              <Select
                name="quantity"
                classname="relative w-16 mt-1 p4-r"
                label="Quantité :"
                labelClassname="p4-r"
                selectedOption={selectedQuantity}
                setSelectedOption={setSelectedQuantity}
                options={quantities}
              />
            </div>
          )}
          <Image
            className="opacity-70"
            src={DeleteIcon}
            alt="icône suppression article"
            onClick={() => dispatch(deleteProductToCart(productIndex))}
          />
        </div>
      </div>
    </article>
  );
};

export default CartProduct;
