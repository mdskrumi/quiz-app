import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "contexts/use-user-context";
import AdminLogin from "components/admin-login";

type TLoginOption = "user" | "admin";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [loginOption, setLoginOption] = useState<TLoginOption>("admin");

  const { user } = useUserContext();

  useEffect(() => {
    if (user && user?.type === "admin") {
      navigate("/questions");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-[100vh] mx-auto w-full">
      <h3 className="text-center py-7">Welcome to the Quiz Application</h3>
      <div className="w-full">
        {loginOption === "user" ? <h1>user</h1> : <AdminLogin />}

        <div className="mt-4 mx-auto max-w-md text-center">
          <span>
            {loginOption === "user"
              ? "To login as an Admin? "
              : "To login as a user? "}
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
