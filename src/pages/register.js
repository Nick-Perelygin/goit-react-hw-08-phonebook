import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {fetchSignup} from 'redux/contactOperation';
import { Form } from '../components/ContactForm/ContactForm.styled';
import { Button } from '@mui/material';

export default function Register() {
  const dispatch = useDispatch()
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
    
  const handleOnChange = e => {
    const {value} = e.currentTarget
    if(e.currentTarget.name === 'name') {
        setName(value)
    }
    if(e.currentTarget.name === 'email') {
        setEmail(value)
    }
    if(e.currentTarget.name === 'password') {
        setPassword(value)
    }        
  };

  const onSubmit = e => {
    e.preventDefault();
    const user = {name: `${name}`, email: `${email}`, password: `${password}`}
    dispatch(fetchSignup(user))
    reset()
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('')
  }

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor={name}>Name
        <input 
          type="text"
          name="name" 
          value={name}
          required
          onChange={handleOnChange}
          id={name}
        />
        </label>
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
      <Button type="submit">Register</Button>
    </Form>
  )   
}