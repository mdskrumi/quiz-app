import AdminLogin from "components/admin-login";
import React, { useState } from "react";

type TLoginOption = "user" | "admin";

const Login: React.FC = () => {
  const [loginOption, setLoginOption] = useState<TLoginOption>("admin");

  return (
    <div className="min-h-[100vh] mx-auto w-full">
      <h3 className="text-center py-7">Welcome to the Quiz Application</h3>
      <div className="w-full">
        {loginOption === "user" ? <h1>user</h1> : <AdminLogin />}

        <div className="mt-4 mx-auto max-w-md text-center">
          <span>
            {loginOption === "user"
              ? "Login as an Admin? "
              : "Login as a user? "}
            <strong
              className="cursor-pointer animate-pulse"
              onClick={() =>
                setLoginOption(loginOption === "user" ? "admin" : "user")
              }
            >
              Click Here
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
