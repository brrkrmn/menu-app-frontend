import React from "react";

import LandingPage from "./components/LandingPage/LandingPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import Dashboard from "./components/Dashboard/Dashboard";

import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from 'react-router-dom'
import { initializeLoggedInUser } from "./reducers/loggedInUserReducer";

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    dispatch(initializeLoggedInUser())
  }, [])
  
  // const loggedInUser = useSelector(state => state.loggedInUser)
  // loggedInUser && navigate('/home')

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/login' element={<LogInForm />} />
        <Route path='/home' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
