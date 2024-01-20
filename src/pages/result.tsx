import Button from "components/button";
import { useUserContext } from "contexts/use-user-context";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  const [results, setResults] = useState();

  useEffect(() => {
    if (user) {
      if (user.type === "admin") {
        setResults(JSON.parse(localStorage.getItem("savedResults")!) || null);
      } else {
        const savedResults = JSON.parse(localStorage.getItem("savedResults")!);
        setResults(savedResults[user.email!]);
      }
    }
  }, [user]);

  console.log({ final: results });

  return (
    <div>
      <h3 className="text-center">Results</h3>
      <div className="w-fit ml-auto flex gap-3">
        <Button
          variant="danger"
          handleClick={() => {
            setUser!(null);
            navigate("/");
          }}
        >
          <p className="min-w-max">Log out</p>
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;
