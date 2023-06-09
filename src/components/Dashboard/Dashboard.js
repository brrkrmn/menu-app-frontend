import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../reducers/loggedInUserReducer';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('loggedInUser'))
  // !user && navigate('/login')
  if (!user) {
    navigate('/login')
  }
  const handleLogOut = () => {
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <div>
      <h1>Home</h1>
      <p>{user.name} is logged in.</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Dashboard;
