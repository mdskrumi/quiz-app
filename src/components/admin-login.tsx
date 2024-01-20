import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { LuEye, LuEyeOff } from "react-icons/lu";

import Button from "components/button";
import ErrorMessage from "components/error-message";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "contexts/use-user-context";

type TAdminLoginData = {
  email: string;
  password: string;
};

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdminLoginData>();

  const onSubmit: SubmitHandler<TAdminLoginData> = (data: TAdminLoginData) => {
    if (data.email === "admin@email.com" && data.password === "admin-pass") {
      setLoading(true);
      setTimeout(() => {
        setUser!({ type: "admin", email: data.email });
        toast.success("Success");
        setLoading(false);
      }, 2500);
    } else {
      alert("failed");
    }
  };

  return (
    <div>
      <h1 className="text-center mb-12">Admin Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MdOutlineEmail className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter your email.",
              },
            })}
            className="text-input pl-10"
          />
        </div>
        {errors.email && errors.email.message && (
          <ErrorMessage message={errors.email.message} />
        )}

        <div className="relative mt-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MdLockOutline className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "Please enter your password.",
              },
            })}
            className="text-input pl-10 pr-10"
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 cursor-pointer select-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <LuEye className="w-5 h-5 text-[#666]" />
            ) : (
              <LuEyeOff className="w-5 h-5 text-[#666]" />
            )}
          </div>
        </div>
        {errors.password && errors.password.message && (
          <ErrorMessage message={errors.password.message} />
        )}

        <Button className="mt-3" type="submit" loading={loading}>
          <p className="font-bold">Submit</p>
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
