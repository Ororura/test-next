import { api } from '@/api';
import { IProduct } from '@/core/product';
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';

export const productApi = api.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, NonNullable<unknown>, FetchBaseQueryMeta>,
      never,
      'api'
    >
  ) => ({
    getProductById: build.query<IProduct, number>({
      query(arg: number): string | FetchArgs {
        return `product/${arg}`;
      }
    })
  })
});

export const { useGetProductByIdQuery } = productApi;
