import { useUserContext } from "contexts/use-user-context";
import Button from "./button";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  return (
    <Button
      variant="danger"
      handleClick={() => {
        setUser!(null);
        navigate("/quiz-app/");
      }}
    >
      <p className="min-w-max">Log out</p>
    </Button>
  );
};

export default LogoutButton;
