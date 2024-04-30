import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, IProduct } from '@/core/product/types';

const initialState: IInitialState = {
  product: {
    id: 1,
    productName: 'Яблоки Гала',
    expirationDate: '2024-05-01',
    productionDate: '2024-04-20',
    ownerId: 1,
    weight: 1.5,
    price: 2.99,
    inStock: true,
    description: 'Сочные и сладкие яблоки сорта Гала',
    deliveryDate: '2024-04-15',
    lastUpdated: '2024-04-25T07:00:00Z',
    manufacturer: 'ООО "Фруктовый рай"',
    category: 'Фрукты',
    quantity: 500
  }
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setNewProduct(state, action: PayloadAction<IProduct>) {
      state.product = action.payload;
    }
  }
});

export const { setNewProduct } = productSlice.actions;
