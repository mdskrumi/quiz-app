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

export type TQuestion = {
  question: string;
  options: { title: string; value: number }[];
};
