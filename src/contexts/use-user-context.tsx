import { useContext } from "react";
import { UserContext } from "./user-context";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context)
    throw new Error("useAuthContext context must be use inside AuthProvider");

  return context;
};
