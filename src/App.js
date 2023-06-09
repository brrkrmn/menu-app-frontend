import React from "react";

import LandingPage from "./components/LandingPage/LandingPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom'
import { initializeLoggedInUser } from "./reducers/loggedInUserReducer";

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(initializeLoggedInUser())
  }, [])
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/login' element={<LogInForm />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/home' element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
