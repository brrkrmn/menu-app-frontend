import React from 'react';
import useField from '../../hooks/useField';
import signupService from '../../services/signup';
import styles from './SignUpForm.module.css';
import { useNavigate, Link } from 'react-router-dom'

const SignUpForm = () => {
  const navigate = useNavigate();
  const name = useField('text');
  const password = useField('password');

  const handleSignUp = async (event) => {
    event.preventDefault()
    const newUser = {
      name: name.value,
      password: password.value,
    }
    await signupService.create(newUser)
    name.setValue('')
    password.setValue('')
    navigate('/login')
  }

  return (
    <div>
      <form className={styles.container} onSubmit={handleSignUp}>
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
      <p>
        Already have an account?
        <Link to='/login'>Log in!</Link>
      </p>
    </div>

  )
}

export default SignUpForm;
