import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {fetchLogin} from 'redux/contactOperation';
import { Form } from '../components/ContactForm/ContactForm.styled';
import { Button } from '@mui/material';

export default function Register() {
  const dispatch = useDispatch()
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
    
  const handleOnChange = e => {
    const {value} = e.currentTarget
    if(e.currentTarget.name === 'email') {
        setEmail(value)
    }
    if(e.currentTarget.name === 'password') {
        setPassword(value)
    }        
  };

  const onSubmit = e => {
    e.preventDefault();
    const user = {email: `${email}`, password: `${password}`}
    dispatch(fetchLogin(user))
    reset()
  };

  const reset = () => {
    setEmail('');
    setPassword('')
  }

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor={email}>Email
        <input 
          type="email"
          name="email" 
          value={email}
          required
          onChange={handleOnChange}
          id={email}
        />
        </label>
      <label htmlFor={password}>Password
        <input 
          type="password"
          name="password" 
          value={password}
          required
          onChange={handleOnChange}
          id={password}
        />
      </label>
      <Button type="submit">Login</Button>
    </Form>
  )   
}