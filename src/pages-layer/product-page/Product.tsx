import { FC } from 'react';
import ProductWidget from '@/widgets/product-widget/ui/ProductWidget';

interface Props {
  productId: number;
}

const ProductPage: FC<Props> = ({ productId }) => {
  return (
    <div>
      <ProductWidget productId={productId}></ProductWidget>
    </div>
  );
};

export default ProductPage;
