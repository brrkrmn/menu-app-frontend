import React from "react";

import Dashboard from "components/Dashboard";
import LandingPage from "components/LandingPage/LandingPage";
import LogInPage from "components/LogInPage/LogInPage";
import ProtectedRoutes from "components/ProtectedRoutes/ProtectedRoutes";
import SignUpPage from "components/SignUpPage/SignUpPage";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { initializeLoggedInUser } from "reducers/loggedInUserReducer.js";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(initializeLoggedInUser());
  }, []);
  const loggedInUser = useSelector((state) => state.loggedInUser);

  React.useEffect(() => {
    loggedInUser && navigate("/home");
  }, []);
  return (
    <Routes>
      <Route path="/" element={loggedInUser ? <Navigate replace to="/home" /> : <LandingPage />} />
      <Route path="/signup" element={loggedInUser ? <Navigate replace to="/home" /> : <SignUpPage />} />
      <Route path="/login" element={loggedInUser ? <Navigate replace to="/home" /> : <LogInPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
