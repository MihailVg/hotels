import { UserType } from './user.type';

export type ReviewType = {
  id: string;
  user: UserType;
  rating: number;
  comment: string;
  date: string;
};
