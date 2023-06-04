import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../reducers/usersReducer';
import useField from '../../hooks/useField';

function SignUpForm() {
  const dispatch = useDispatch();
  const name = useField('text');
  const password = useField('text');

  const handleSignUp = async (event) => {
    event.preventDefault()

    const newUser = {
      name: name.value,
      password: password.value,
    }
    dispatch(createUser(newUser));
    name.setValue('')
    password.setValue('')
  }

  return (
    <form onSubmit={handleSignUp}>
      <legend>Get Started</legend>
      <label htmlFor='name'>Restaurant Name</label>
      <input 
        type={name.type}
        id='name'
        value={name.value}
        name='name'
        onChange={name.onChange}
      />

      <label htmlFor='password'>Password</label>
      <input 
        type={password.type}
        id='password'
        value={password.value}
        name='password'
        onChange={password.onChange}
      />
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default SignUpForm;
