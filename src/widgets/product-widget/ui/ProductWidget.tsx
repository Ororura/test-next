import { FC } from 'react';
import Product from '@/entities/product/ui/Product';
import { useGetProductByIdQuery } from '@/entities';

interface Props {
  productId: number;
}

const ProductWidget: FC<Props> = ({ productId }) => {
  const { data } = useGetProductByIdQuery(productId);
  return <div>{data && <Product productData={data}></Product>}</div>;
};

export default ProductWidget;
