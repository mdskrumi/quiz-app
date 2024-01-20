import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { Suspense, lazy } from "react";
import UserProvider from "contexts/user-context";
import AdminOutlet from "components/admin-outlet";
import UserOutlet from "components/user-outlet";
import { Toaster } from "react-hot-toast";

const Login = lazy(() => import("pages/login"));
const QuestionPage = lazy(() => import("pages/question"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading</h1>}>
          <UserProvider>
            <Toaster position="top-right" />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="questions" element={<AdminOutlet />}>
                <Route path="" element={<QuestionPage />} />
              </Route>
              <Route path="quiz" element={<UserOutlet />}>
                <Route path="" element={<QuestionPage />} />
              </Route>
            </Routes>
          </UserProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
