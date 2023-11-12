import { useEffect } from 'react';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import { useSelector } from 'react-redux';

export const App = () => {

  return (
    <div>
      <PhoneForm />
      <Contacts></Contacts>
    </div>
  );
}
