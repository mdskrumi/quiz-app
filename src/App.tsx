import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

import UserProvider from "contexts/user-context";

import AdminOutlet from "components/admin-outlet";
import UserOutlet from "components/user-outlet";

const Login = lazy(() => import("pages/login"));
const QuestionPage = lazy(() => import("pages/question"));
const CreateQuestionPage = lazy(() => import("pages/create-question"));
const QuizPage = lazy(() => import("pages/quiz"));

import "./index.css";
import QuestionProvider from "contexts/question-context";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading</h1>}>
          <UserProvider>
            <QuestionProvider>
              <Toaster position="top-right" />
              <Routes>
                <Route path="" element={<Login />} />
                <Route path="/questions" element={<AdminOutlet />}>
                  <Route path="" element={<QuestionPage />} />
                  <Route path="create" element={<CreateQuestionPage />} />
                  <Route path="update/:id" element={<CreateQuestionPage />} />
                </Route>
                <Route path="quiz" element={<UserOutlet />}>
                  <Route path="" element={<QuizPage />} />
                </Route>
              </Routes>
            </QuestionProvider>
          </UserProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
