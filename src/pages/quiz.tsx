import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useQuestionContext } from "contexts/use-question-context";
import { useUserContext } from "contexts/use-user-context";
import Button from "components/button";
import QuizQuestion from "components/quiz-quesiton";
import { TResult } from "libs/types";
import ConfirmDialog from "components/confirm-dialog";
import LogoutButton from "components/logout-button";

const QuizPage = () => {
  const navigate = useNavigate();
  const { questions } = useQuestionContext();
  const { user } = useUserContext();

  const [quizStaterd, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState<TResult[]>([]);

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
    <>
      <div>
        <p>{`Hi! ${user?.email}`}</p>
        {!quizStaterd ? (
          <div className="w-fit ml-auto flex gap-3">
            <LogoutButton />
          </div>
        ) : (
          <h3 className="text-center mb-3">{`Your Questions for the Quiz. ${
            currentQuestion + 1
          }/${questions?.length}`}</h3>
        )}

        {questions && questions?.length > 0 ? (
          quizStaterd ? (
            <div className="grid grid-cols-1 gap-7 mt-7">
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

              {currentQuestion === questions.length - 1 && (
                <ConfirmDialog
                  title="Submit Answers"
                  description="Are you sure you want to submit the answers? This action can not be undone."
                  handleConfirm={() => {
                    const savedResults =
                      JSON.parse(localStorage.getItem("savedResults")!) || {};

                    if (user && user.email) {
                      if (savedResults[user?.email]) {
                        savedResults[user?.email].push(results);
                      } else {
                        savedResults[user?.email] = [results];
                      }
                    }
                    localStorage.setItem(
                      "savedResults",
                      JSON.stringify(savedResults)
                    );
                    navigate("/quiz-app/quiz/results");
                  }}
                >
                  <Button>Submit</Button>
                </ConfirmDialog>
              )}
            </div>
          ) : (
            <div className="abs-center">
              <h3 className="mb-5">Are you ready for the quiz?</h3>
              <Button
                handleClick={() => setQuizStarted(true)}
                className="rounded-full p-10"
              >
                <h1 className="">Ready</h1>
              </Button>
            </div>
          )
        ) : (
          <div className="text-center opacity-70 text-xl sm:text-2xl md:text-3xl abs-center">{`You do not have any questions available now.`}</div>
        )}
      </div>
    </>
  );
};

export default QuizPage;
