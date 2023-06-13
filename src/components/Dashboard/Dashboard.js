import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../reducers/loggedInUserReducer';

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
  const showMenu = () => {
    navigate('/menu')
  }

  return (
    <div>
      <h1>Home</h1>
      <p>{user.name} is logged in.</p>
      <button onClick={showMenu}>Menu</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Dashboard;
