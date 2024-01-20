import { useContext } from "react";
import { QuestionContext } from "./question-context";

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);

  if (!context)
    throw new Error(
      "useQuestionContext context must be use inside QuestionProvider"
    );

  return context;
};
