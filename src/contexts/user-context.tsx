import React, { createContext, useEffect, useState } from "react";

import { TUserData } from "libs/types";

export const UserContext = createContext<{
  user?: TUserData;
  setUser?: (arg: TUserData) => void;
}>({});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUserData>(
    JSON.parse(localStorage.getItem("logged-user")!) || {}
  );

  useEffect(() => {
    if (user.type) {
      localStorage.setItem("logged-user", JSON.stringify(user));
    }
  }, [user]);

  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
