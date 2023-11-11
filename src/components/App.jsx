import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';

const getContacts = () => {
  const savedContacts = localStorage.getItem('saved-contacts');
  if (savedContacts !== null) {
    console.log(JSON.parse(savedContacts));
    return JSON.parse(savedContacts);
  } else {
    return [];
  }

}

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log('+');
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts])

  const addPhone = newPhone => {
    console.log('2');
    if (contacts.find(contact => contact.name === newPhone.name)) {
      alert(`${newPhone.name} is Olredy in contacts`)
    }
    else {
      setContacts(prevState => ([
        ...prevState,
        { ...newPhone, id: nanoid() }
      ]))
    }
  };

  const deletePhone = PhoneId => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== PhoneId)))
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const newContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <PhoneForm onAddPhone={addPhone} />
      <Contacts contacts={newContacts} onDelete={deletePhone} filter={filter} onChange={changeFilter}></Contacts>
    </div>
  );
}
