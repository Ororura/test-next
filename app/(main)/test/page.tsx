'use client'
import { FC, FormEvent, FormEventHandler, MouseEventHandler } from 'react'
import { IUser } from '@/types/types'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserList } from '@/core/user'
import { IInitialState, IProduct, selectProduct, setNewProduct } from '@/core/product'

const Test: FC = () => {
  const product: IInitialState = useSelector(selectProduct)
  const dispatch = useDispatch()

  const newProduct: IProduct = {
    category: 'Electronics',
    deliveryDate: '2024-05-01',
    description: 'A cutting-edge device with advanced features.',
    expirationDate: '2025-12-31',
    id: 12345,
    inStock: true,
    lastUpdated: '2024-04-29',
    manufacturer: 'TechCo',
    ownerId: 98765,
    price: 499.99,
    productName: 'Smartphone X',
    productionDate: '2024-03-15',
    quantity: 100,
    weight: 0.3
  }

  const changeProductHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(setNewProduct(newProduct))
  }

  return (
    <div>
      <form onSubmit={changeProductHandler}>
        <button type='submit'>Изменить продукт</button>
      </form>
    </div>
  )
}

export default Test
