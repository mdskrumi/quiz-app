import { useUserContext } from "contexts/use-user-context";
import { Link, Outlet } from "react-router-dom";

const AdminOutlet = () => {
  const { user } = useUserContext();

  return user?.type === "admin" ? (
    <div className="overflow-hidden">
      <Outlet />
    </div>
  ) : (
    <div>
      You are not allowed to view this page.
      <Link to={"/"} replace>
        Go Back
      </Link>
    </div>
  );
};

export default AdminOutlet;
