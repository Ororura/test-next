import { IChat } from '..';
import { FetchArgs } from '@reduxjs/toolkit/query';
import { api } from '@/shared/api';

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
