import { TResult } from "libs/types";
import { Fragment } from "react";

const ResultCard: React.FC<{ result: TResult[] }> = ({ result }) => {
  const total = result.reduce((total, question) => {
    return total + question.result;
  }, 0);

  return (
    <div>
      <div className="grid grid-cols-3">
        <p className="text-left border-b">Question</p>
        <p className="text-left border-b">Answer</p>
        <p className="text-left border-b">Result</p>
        {result.map((res, index) => (
          <Fragment key={index}>
            <p>{res.question} </p>
            <p>{res.answered} </p>
            <p>{res.result}</p>
          </Fragment>
        ))}
        <p className="col-start-3 border-t pb-4 mb-3">Total: {total}</p>
      </div>
    </div>
  );
};

export default ResultCard;
