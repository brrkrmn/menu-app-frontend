import React from 'react';
import useField from '../../hooks/useField';
import loginService from '../../services/login';
import { useDispatch } from "react-redux";
import { logUserIn } from '../../reducers/loggedInUserReducer';

const LogInForm = () => {
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
  }

  return (
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
  )
}

export default LogInForm;
