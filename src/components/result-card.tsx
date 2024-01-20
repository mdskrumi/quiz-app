import { TResult } from "libs/types";

const ResultCard: React.FC<{ result: TResult[] }> = ({ result }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Result</h2>
      <p className="mb-2">Total Score: 0</p>
      <ul>
        {result.map((res, index) => (
          <li key={index}>
            <p>
              Question: {res.question}
              <br />
              Your Answer: {res.answered}
              <br />
              Result: {res.result}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultCard;
