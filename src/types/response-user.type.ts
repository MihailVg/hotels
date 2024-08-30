export type ResponseUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type SendUser = {
  email: string;
  password: string;
};
