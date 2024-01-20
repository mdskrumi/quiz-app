import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useQuestionContext } from "contexts/use-question-context";
import { useUserContext } from "contexts/use-user-context";
import Button from "components/button";
import QuizQuestion from "components/quiz-quesiton";
import { TResult } from "libs/types";

const QuizPage = () => {
  const navigate = useNavigate();
  const { questions } = useQuestionContext();
  const { setUser } = useUserContext();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState<TResult[]>([]);

  console.log({ questions, results });

  useEffect(() => {
    if (questions)
      setResults(
        questions?.map((question) => {
          return {
            question: question.question,
            result: 0,
          };
        })
      );
  }, [questions]);

  return (
    <div>
      <h3 className="text-center">Your Questions for the Quiz</h3>
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
      {questions && questions?.length > 0 ? (
        <div className="grid grid-cols-1 gap-7">
          <QuizQuestion
            question={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            results={results}
            setResults={setResults}
          />
          <div className="flex justify-between items-center">
            <Button
              className="max-w-fit"
              variant="secondary"
              disabled={currentQuestion === 0}
              handleClick={() => setCurrentQuestion((val) => val - 1)}
            >
              <p>Previous Question</p>
            </Button>
            <Button
              className="max-w-fit"
              variant="secondary"
              disabled={currentQuestion === questions.length - 1}
              handleClick={() => setCurrentQuestion((val) => val + 1)}
            >
              <p>Next Question</p>
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center opacity-70 text-xl sm:text-2xl md:text-3xl abs-center">{`You do not have any questions available now.`}</div>
      )}
    </div>
  );
};

export default QuizPage;
