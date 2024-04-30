'use client';
import { FC } from 'react';
import { Product } from '@/ui/components/product';
import { useGetProductByIdQuery } from '@/core/product/api';

interface PageParams {
  params: { id: number };
}

const ProductPage: FC<PageParams> = ({ params }) => {
  const { data } = useGetProductByIdQuery(params.id);
  return (
    <div>
      <p>Страница с продуктами</p>
      {data && <Product product={data}></Product>}
    </div>
  );
};

export default ProductPage;
