import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import { IProduct } from '@/entities';
import { api } from '@/shared/api';

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
