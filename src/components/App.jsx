import { useEffect } from 'react';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import { useSelector } from 'react-redux';

export const App = () => {

  const contacts = useSelector(state => state.contacts.contacts)

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts])

  return (
    <div>
      <PhoneForm />
      <Contacts></Contacts>
    </div>
  );
}
