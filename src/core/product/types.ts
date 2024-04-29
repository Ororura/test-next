interface IProduct {
  id: number;
  productName: string;
  expirationDate: string;
  productionDate: string;
  ownerId: number;
  weight: number;
  price: number;
  inStock: boolean;
  description: string;
  deliveryDate: string;
  lastUpdated: string;
  manufacturer: string;
  category: string;
  quantity: number;
}

interface IInitialState {
  product: IProduct;
}

export type { IProduct, IInitialState };
