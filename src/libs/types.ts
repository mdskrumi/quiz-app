export type TUser = "admin" | "user";

export type TUserData = {
  type?: "admin" | "user";
  email?: string;
  data?: number[];
};

export type TAdminLoginData = {
  email: string;
  password: string;
};

export type TUserLoginData = {
  email: string;
};

export type TQuestion = {
  question: string;
  options: { title: string; value: number }[];
};

export type TResult = {
  question: string;
  result: number;
  answered?: string;
};

type TUserResults = TResult[][];

export type TResults = Record<string, TUserResults>;
