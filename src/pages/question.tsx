import Button from "components/button";
import { useQuestionContext } from "contexts/use-question-context";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useUserContext } from "contexts/use-user-context";

const QuestionPage = () => {
  const navigate = useNavigate();
  const { questions, setQuestions } = useQuestionContext();
  const { setUser } = useUserContext();

  return (
    <div>
      <h3 className="text-center">Your Questions for the Quiz</h3>
      <div className="w-fit ml-auto flex gap-3">
        <Button variant="primary" handleClick={() => navigate("create")}>
          <p className="min-w-max">Add New Question</p>
        </Button>
        <Button variant="ghost" handleClick={() => navigate("create")}>
          <p className="min-w-max">View Results</p>
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
      {questions && questions?.length > 0 ? (
        <div className="mx-auto max-w-2xl">
          {questions?.map((q, i) => {
            return (
              <div className="bg-gray-100 my-3 p-3 shadow-md" key={q.question}>
                <div className="flex justify-between items-center border-b mb-2 pb-2">
                  <h4>{q.question}</h4>
                  <div className="flex gap-3">
                    <CiEdit
                      className="w-7 h-7 text-primary-default hover:text-primary-dark"
                      onClick={() => navigate(`update/${i}`)}
                    />
                    <MdOutlineDeleteForever
                      className="w-7 h-7 text-danger-default hover:text-danger-dark"
                      onClick={() => {
                        setQuestions!(questions.filter((_, idx) => i !== idx));
                      }}
                    />
                  </div>
                </div>
                {q.options.map((option) => {
                  return (
                    <ul className="border-b" key={option.title}>
                      <li className="grid grid-cols-2">
                        <p>{option.title}</p>
                        <p className="text-right">{option.value}</p>
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center opacity-70 text-xl sm:text-2xl md:text-3xl abs-center">{`You do not have any questions available now.`}</div>
      )}
    </div>
  );
};

export default QuestionPage;
