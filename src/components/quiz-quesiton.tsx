import { TQuestion, TResult } from "libs/types";

const QuizQuestion: React.FC<{
  question: TQuestion;
  currentQuestion: number;
  setResults: (arg: TResult[]) => void;
  results: TResult[];
}> = ({ question, setResults, results, currentQuestion }) => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-5 sm:mb-7">{question.question}</div>
      <div className="flex flex-col gap-3">
        {question.options?.map((option) => {
          return (
            <div
              className={`border p-3 ${
                results[currentQuestion]?.answered === option.title
                  ? "border-primary-default border-4"
                  : ""
              }`}
              key={option.title}
              onClick={() => {
                setResults(
                  results.map((result, idx) => {
                    return idx === currentQuestion
                      ? {
                          ...result,
                          answered: option.title,
                          result: option.value,
                        }
                      : result;
                  })
                );
              }}
            >
              {option.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
