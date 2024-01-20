import { MdOutlineEmail } from "react-icons/md";

import Button from "components/button";
import ErrorMessage from "components/error-message";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "contexts/use-user-context";
import { TUserLoginData } from "libs/types";

const UserLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserLoginData>();

  const onSubmit: SubmitHandler<TUserLoginData> = (data: TUserLoginData) => {
    setLoading(true);
    setTimeout(() => {
      setUser!({ type: "user", email: data.email });
      toast.success("Success");
      setLoading(false);
    }, 2500);
  };

  return (
    <div>
      <h1 className="text-center mb-12">User Login</h1>
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

        <Button className="mt-3" type="submit" loading={loading}>
          <p className="font-bold">Submit</p>
        </Button>
      </form>
    </div>
  );
};

export default UserLogin;
