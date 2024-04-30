'use client';
import { FC } from 'react';
import { IProduct } from '@/core/product';

interface Props {
  product: IProduct;
}

export const Product: FC<Props> = ({ product }) => {
  return (
    <div>
      <p>Продукт:</p>
      {product && (
        <div>
          <p>Название продукта: {product.productName}</p>
        </div>
      )}
    </div>
  );
};
