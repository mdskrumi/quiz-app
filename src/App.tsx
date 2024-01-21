import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

import UserProvider from "contexts/user-context";
import QuestionProvider from "contexts/question-context";

import AdminOutlet from "components/admin-outlet";
import UserOutlet from "components/user-outlet";

const Login = lazy(() => import("pages/login"));
const QuestionPage = lazy(() => import("pages/question"));
const CreateQuestionPage = lazy(() => import("pages/create-question"));
const QuizPage = lazy(() => import("pages/quiz"));
const ResultPage = lazy(() => import("pages/result"));

import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="abs-center">
              <FaSpinner className="w-12 h-12 animate-spin" />
            </div>
          }
        >
          <UserProvider>
            <QuestionProvider>
              <Toaster position="top-right" />
              <Routes>
                <Route path="quiz-app" element={<Login />} />
                <Route path="/quiz-app/questions" element={<AdminOutlet />}>
                  <Route path="" element={<QuestionPage />} />
                  <Route path="create" element={<CreateQuestionPage />} />
                  <Route path="update/:id" element={<CreateQuestionPage />} />
                </Route>
                <Route path="/quiz-app/quiz" element={<UserOutlet />}>
                  <Route path="" element={<QuizPage />} />
                  <Route path="results" element={<ResultPage />} />
                </Route>
                {/* <Route path="*" element={<Navigate to={"/quiz-app"} />} /> */}
              </Routes>
            </QuestionProvider>
          </UserProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
