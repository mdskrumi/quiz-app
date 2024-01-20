import { TQuestion, TResult } from "libs/types";

const QuizQuestion: React.FC<{
  question: TQuestion;
  setResult: (arg: TResult[]) => void;
}> = ({ question, setResult }) => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-5 sm:mb-7">{question.question}</div>
      <div className="flex flex-col gap-3">
        {question.options?.map((option) => {
          return (
            <div className="border p-3" key={option.title} onClick={() => {}}>
              {option.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
