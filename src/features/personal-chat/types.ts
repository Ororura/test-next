import { IUser } from '@/shared';

interface IPersonalMessage {
  sender: IUser;
  receiver: IUser;
  content: string;
  sentAt: string;
}

export type { IPersonalMessage };
