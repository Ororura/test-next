import { api } from '@/app/api';
import { IChat } from '..';
import { FetchArgs } from '@reduxjs/toolkit/query';

export const chatApi = api.injectEndpoints({
  endpoints: (build) => ({
    getChat: build.query<IChat[], null>({
      query(): string | FetchArgs {
        return 'main-chat';
      }
    })
  })
});

export const { useGetChatQuery } = chatApi;
