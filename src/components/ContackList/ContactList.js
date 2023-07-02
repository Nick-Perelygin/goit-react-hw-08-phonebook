import { useDispatch, useSelector } from 'react-redux';
import { deleteContact} from 'redux/contactOperation';
import { ContactListItem } from './ContactList.styled';
import { Button } from '@mui/material';

const ContactList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const contacts = useSelector(state => state.contacts.items)

  const visibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
  
  return (                                                             
  <ul>
    {visibleContacts().map(({id, name, number}) => (
        <ContactListItem key={id}>
            <p>{name} {number}</p>
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </ContactListItem>
    ))}
  </ul>
)};

export default ContactList