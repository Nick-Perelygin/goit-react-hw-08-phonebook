import { useDispatch, useSelector } from 'react-redux';
import { deleteContact} from 'redux/contactOperation';
import { ContactListItem } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const contacts = useSelector(state => state.contacts.items)
  
  const visibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return (                                                             
  <ul>
    {visibleContacts().map(({id, name, phone}) => (
        <ContactListItem key={id}>
            <p>{name} {phone}</p>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </ContactListItem>
    ))}
  </ul>
)};

export default ContactList