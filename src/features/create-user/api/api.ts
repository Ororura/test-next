import { api } from '../../../app/api';
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query';
import { ICreateUser } from '@/features/create-user';

export const createUserApi = api.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, NonNullable<unknown>, FetchBaseQueryMeta>,
      never,
      'api'
    >
  ) => ({
    createUser: build.mutation<ICreateUser, ICreateUser>({
      query: (body) => ({
        url: 'add-user',
        method: 'POST',
        body
      })
    })
  })
});

export const { useCreateUserMutation } = createUserApi;
