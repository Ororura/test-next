import { FC } from 'react';
import { IProduct } from '@/entities';

interface Props {
  productData: IProduct;
}

const Product: FC<Props> = ({ productData }) => {
  return (
    <div>
      <p>Продукт:</p>
      {productData && (
        <div>
          <p>Название продукта: {productData.productName}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
