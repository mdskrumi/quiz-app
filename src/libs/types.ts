export type TUser = "admin" | "user";

export type TUserData = {
  type?: "admin" | "user";
  email?: string;
  data?: number[];
};
