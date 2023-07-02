import { Outlet } from "react-router-dom"
import ContactList from 'components/ContackList/ContactList'
import ContactForm from 'components/ContactForm/ContactForm'
import Filter from 'components/Filter/Filter'
import {fetchContacts} from 'redux/contactOperation';
import { useDispatch, useSelector} from 'react-redux';
import {useEffect, Suspense} from 'react';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        marginLeft: '40px',
        fontSize: 16,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  )
};

export default Contacts