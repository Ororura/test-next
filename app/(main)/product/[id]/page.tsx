'use client';
import { FC } from 'react';
import ProductPage from '@/pages-layer/product-page/Product';

interface PageParams {
  params: { id: number };
}

const Page: FC<PageParams> = ({ params }) => {
  return <ProductPage productId={params.id}></ProductPage>;
};

export default Page;
