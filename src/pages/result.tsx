import Button from "components/button";
import ResultCard from "components/result-card";
import { useUserContext } from "contexts/use-user-context";
import { TResults } from "libs/types";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  const [results, setResults] = useState<TResults>();

  useEffect(() => {
    if (user && user?.email) {
      if (user.type === "admin") {
        setResults(JSON.parse(localStorage.getItem("savedResults")!) || null);
      } else {
        const savedResults = JSON.parse(localStorage.getItem("savedResults")!);
        const result = { [user?.email]: savedResults[user?.email] };
        setResults(result);
      }
    }
  }, [user]);

  return (
    <div>
      <h3 className="text-center">Results</h3>
      <div className="w-fit ml-auto flex gap-3">
        <Button
          variant="primary"
          handleClick={() => {
            navigate(user?.type === "admin" ? "/questions" : "/quiz");
          }}
        >
          <p className="min-w-max">
            {" "}
            {user?.type === "admin" ? "Questions" : "Try Again"}
          </p>
        </Button>
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
      <div>
        {results
          ? Object.keys(results).map((email) => {
              return (
                <div key={email}>
                  <h4>{email}</h4>
                  <div>
                    {results[email]?.map((res, idx) => (
                      <ResultCard result={res} key={idx} />
                    ))}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ResultPage;
