import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header';
import { ModalWindow } from './components/modalwindow/ModalWindow';
import { Persons } from './components/persons/Persons';

export type PersonType = {
  id: number;
  firstName: string;
  lastName: string;
};

export type ModalWindowsState = {
  isOpen: boolean;
  title: string;
};

let initialState: Array<PersonType> = [
  { id: 1, firstName: 'Maxim', lastName: 'Myasnikov' },
  { id: 2, firstName: 'John', lastName: 'Boo' },
  { id: 3, firstName: 'Michael', lastName: 'Robinson' },
  { id: 4, firstName: 'Alexandr', lastName: 'Robson' },
];

function App() {
  const [listOfPersons, setListOfPersons] =
    useState<Array<PersonType>>(initialState);

  const [modalWindowState, setModalWindowState] = useState<ModalWindowsState>({
    isOpen: false,
    title: '',
  });
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  function createFirstName(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.currentTarget.value);
  }

  function createLastName(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.currentTarget.value);
  }

  function hideModalWindow() {
    setModalWindowState({ isOpen: false, title: '' });
  }
  function addPerson() {
    setModalWindowState({ isOpen: true, title: 'Создание сотрудника' });
  }

  function savePerson() {
    let newId = listOfPersons.length + 1;
    let newPerson: PersonType = { id: newId, firstName, lastName };
    let newListOfPersons: Array<PersonType> = listOfPersons.slice();
    newListOfPersons.push(newPerson);
    setListOfPersons(newListOfPersons);
    setFirstName('');
    setLastName('');
    setModalWindowState({ isOpen: false, title: '' });
  }

  function editPerson() {
    setModalWindowState({ isOpen: true, title: 'Редактирование сотрудника' });
  }

  function delPerson(id: number) {
    let newListOfCoworkers = listOfPersons.filter((c) => c.id !== id);
    setListOfPersons(newListOfCoworkers);
  }
  return (
    <div className="App">
      <ModalWindow
        firstName={firstName}
        lastName={lastName}
        modalWindowState={modalWindowState}
        hideModalWindow={hideModalWindow}
        createFirstName={createFirstName}
        createLastName={createLastName}
        savePerson={savePerson}
      />
      <Header />
      <Persons
        listOfPersons={listOfPersons}
        editPerson={editPerson}
        delPerson={delPerson}
      />
      <Footer addPerson={addPerson} />
    </div>
  );
}

export default App;
