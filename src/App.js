import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import LogInPage from "./components/LogInPage/LogInPage";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import { initializeLoggedInUser } from "./reducers/loggedInUserReducer";

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    dispatch(initializeLoggedInUser())
  }, [])
  const loggedInUser = useSelector(state => state.loggedInUser)

  React.useEffect(() => {
    loggedInUser && navigate('/home')
  }, [])
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LogInPage />} />
      <Route element={<ProtectedRoutes />} >
        <Route path='/home' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
