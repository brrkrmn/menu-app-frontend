import React from 'react';
import useField from '../../hooks/useField';
import signupService from '../../services/signup';

function SignUpForm() {
  const name = useField('text');
  const password = useField('text');

  const handleSignUp = async (event) => {
    event.preventDefault()
    const newUser = {
      name: name.value,
      password: password.value,
    }
    signupService.create(newUser)
    name.setValue('')
    password.setValue('')
  }

  return (
    <form onSubmit={handleSignUp}>
      <legend>Sign Up</legend>
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
