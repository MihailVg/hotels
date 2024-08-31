export type AuthDataType = {
  email: string;
  password: string;
}

export type UserShortType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

export type UserType = UserShortType & {
  email: string;
  token: string;
};
