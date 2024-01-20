import { useUserContext } from "contexts/use-user-context";
import { Navigate, Outlet } from "react-router-dom";

const UserOutlet = () => {
  const { user } = useUserContext();

  return user?.type ? (
    <div className="overflow-hidden">
      <Outlet />
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};

export default UserOutlet;
