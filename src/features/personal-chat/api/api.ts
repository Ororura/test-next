import { api } from '@/shared/api';
import { IPersonalMessage } from '@/features/personal-chat/types';

export const createPersonalChatApi = api.injectEndpoints({
  endpoints: (build) => ({
    createNewChat: build.mutation<IPersonalMessage, IPersonalMessage>({
      query: (body) => ({
        url: 'personal-chat',
        method: 'POST',
        body
      })
    }),
    getUserByID: build.mutation<number, number>({
      query: (body) => ({
        url: 'get-user',
        method: 'POST',
        body
      })
    })
  })
});

export const { useCreateNewChatMutation, useGetUserByIDMutation } = createPersonalChatApi;
