import React from 'react';
import useField from '../../hooks/useField';
import loginService from '../../services/login';
import { useDispatch } from "react-redux";
import { logUserIn } from '../../reducers/loggedInUserReducer';
import { useNavigate, Link } from 'react-router-dom'

const LogInForm = () => {
  const navigate = useNavigate();
  const name = useField('text');
  const password = useField('password');
  const dispatch = useDispatch();

  const handleLogIn = async (event) => {
    event.preventDefault()
    const user = {
      name: name.value,
      password: password.value,
    }

    try {
      const userToLogIn = await loginService.login(user);
      dispatch(logUserIn(userToLogIn))
    } catch (error) {
      window.alert('Login failed')
    }

    name.setValue('');
    password.setValue('');
    navigate('/home')
  }

  return (
    <div>
      <form onSubmit={handleLogIn} >
        <legend>Log In</legend>
        <label htmlFor='logInName'>Name</label>
        <input 
          id='logInName'
          name='name'
          type={name.type}
          value={name.value}
          onChange={name.onChange}
        />
        <label htmlFor='logInPassword'>Password</label>
        <input 
          id='logInPassword'
          name='password'
          type={password.type}
          value={password.value}
          onChange={password.onChange}
        />
        <button type='submit'>Log In</button>
      </form>
      <p>
        Don't you have an account? 
        <Link to='/signup'>
          Sign up for free!
        </Link>
      </p>
    </div>

  )
}

export default LogInForm;
