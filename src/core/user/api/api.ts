import { api } from '@/api';
import { IUser } from '@/types/types';
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';

export const userApi = api.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, NonNullable<unknown>, FetchBaseQueryMeta>,
      never,
      'api'
    >
  ) => ({
    getUserById: build.query<IUser, number>({
      query(arg: number) {
        return `user/${arg}`;
      }
    })
  })
});

export const { useGetUserByIdQuery } = userApi;
