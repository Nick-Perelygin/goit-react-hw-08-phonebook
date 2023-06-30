import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addContact} from 'redux/contactOperation';
import { nanoid } from 'nanoid';
import { Form } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts.items)
  const[name,setName] = useState('');
  const[phone,setPhone] = useState('');
    
  const handleOnChange = e => {
    const {value} = e.currentTarget
    if(e.currentTarget.name === 'name') {
      setName(value)
    }
    if(e.currentTarget.name === 'phone') {
      setPhone(value)
    }        
  };

  const onSubmit = e => {
    e.preventDefault();
    const contact = {name: `${name}`, phone: `${phone}`, id: nanoid()}
    
    const filterResult = contacts.find(prevContact =>
      prevContact.name.toLowerCase().trim() ===
      contact.name.toLowerCase().trim() ||
      prevContact.phone.trim() === contact.phone.trim()
    )
    if(filterResult)
      alert(`${contact.name}: is already in contacts`)
    else dispatch(addContact(contact))
    reset()
  };

  const reset = () => {
    setName('');
    setPhone('')
  }

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor={name}>Name
        <input 
          type="text"
          name="name" 
          value={name}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$" 
          title="Name may contain onle letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Bats de Castelmore d`Artagnan" 
          required
          onChange={handleOnChange}
          id={name}
        />
        </label>
      <label htmlFor={phone}>Number
        <input 
          type="tel"
          name="phone" 
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" 
          required
          onChange={handleOnChange}
          id={phone}
        />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  )   
}