'use client';
import { FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IInitialState, selectProduct, setNewProduct } from '@/core/product';
import { useGetProductByIdQuery } from '@/core/product/api';

const Test: FC = () => {
  const product: IInitialState = useSelector(selectProduct);
  const dispatch = useDispatch();

  const { data } = useGetProductByIdQuery(1);

  const changeProductHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data) {
      dispatch(setNewProduct(data));
    }
    console.log(product);
  };

  return (
    <div>
      <form onSubmit={changeProductHandler}>
        <button type='submit'>Изменить продукт</button>
      </form>
    </div>
  );
};

export default Test;
