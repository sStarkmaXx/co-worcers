import React, { useState } from 'react';
import './App.css';
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
  function editPerson() {
    setModalWindowState({ isOpen: true, title: 'Редактирование сотрудника' });
  }
  function hideModalWindow() {
    setModalWindowState({ isOpen: false, title: '' });
  }
  function delPerson(id: number) {
    let newListOfCoworkers = listOfPersons.filter((c) => c.id !== id);
    setListOfPersons(newListOfCoworkers);
  }
  return (
    <div className="App">
      <ModalWindow
        modalWindowState={modalWindowState}
        hideModalWindow={hideModalWindow}
      />
      <Header />
      <Persons
        listOfPersons={listOfPersons}
        editPerson={editPerson}
        delPerson={delPerson}
      />
    </div>
  );
}

export default App;
