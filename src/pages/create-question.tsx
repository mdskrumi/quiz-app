import QuestionForm from "components/question-form";
import { useQuestionContext } from "contexts/use-question-context";
import { TQuestion } from "libs/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateQuestionPage = () => {
  const navigate = useNavigate();
  const { questions, setQuestions } = useQuestionContext();
  const [question, setQuestion] = useState<TQuestion | undefined>(undefined);

  const params = useParams() as { id: string };

  useEffect(() => {
    if (params.id) {
      setQuestion(questions?.find((_, i) => i === +params.id));
    }
  }, [params, questions]);

  return (
    <div>
      <h3 className="text-center">
        {params?.id
          ? "Update your Question for the Quiz"
          : "Create a new Question for the Quiz"}
      </h3>
      <QuestionForm
        question={question}
        onSubmit={(data) => {
          let newQuestions: TQuestion[] | undefined = [];
          if (params.id) {
            newQuestions = questions?.map((ques, idx) => {
              if (+params.id === idx) {
                return data;
              }
              return ques;
            });
          } else newQuestions = [...questions!, data];

          setQuestions!(newQuestions!);
          navigate("/questions");
        }}
      />
    </div>
  );
};

export default CreateQuestionPage;
