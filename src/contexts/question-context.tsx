import React, { createContext, useEffect, useState } from "react";

import { TQuestion } from "libs/types";

export const QuestionContext = createContext<{
  questions?: TQuestion[];
  setQuestions?: (arg: TQuestion[]) => void;
}>({});

const QuestionProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<TQuestion[]>(
    JSON.parse(localStorage.getItem("questions")!) || []
  );

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
