import { api } from '@/app/api';
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import { IUser } from '@/shared';

export const userApi = api.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, NonNullable<unknown>, FetchBaseQueryMeta>,
      never,
      'api'
    >
  ) => ({
    getUserById: build.query<IUser, number>({
      query(arg: number): string | FetchArgs {
        return `user/${arg}`;
      }
    })
  })
});

export const { useGetUserByIdQuery } = userApi;
