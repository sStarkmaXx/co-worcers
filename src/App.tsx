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
  const [selectPersonId, setSelectPersonId] = useState<number>(0);

  function createFirstName(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.currentTarget.value);
  }

  function createLastName(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.currentTarget.value);
  }

  function hideModalWindow() {
    setModalWindowState({ isOpen: false, title: '' });
    setFirstName('');
    setLastName('');
  }
  function openAddPersonWindow() {
    setModalWindowState({ isOpen: true, title: 'Создание сотрудника' });
  }

  function addPerson() {
    let newId = listOfPersons.length + 1;
    let newPerson: PersonType = { id: newId, firstName, lastName };
    let newListOfPersons: Array<PersonType> = listOfPersons.slice();
    newListOfPersons.unshift(newPerson);
    setListOfPersons(newListOfPersons);
    setFirstName('');
    setLastName('');
    setModalWindowState({ isOpen: false, title: '' });
  }

  function openEditPersonWindow(id: number) {
    setModalWindowState({ isOpen: true, title: 'Редактирование сотрудника' });
    let selectPerson = listOfPersons.find((pers) => pers.id === id);
    setFirstName(selectPerson!.firstName);
    setLastName(selectPerson!.lastName);
    setSelectPersonId(id);
  }

  function saveChangedPerson() {
    let changedPersone: PersonType = {
      id: selectPersonId,
      firstName: firstName,
      lastName: lastName,
    };
    let newListWithCangedPerson = listOfPersons.filter(
      (c) => c.id !== selectPersonId
    );
    newListWithCangedPerson.push(changedPersone);
    setListOfPersons(newListWithCangedPerson);
    setFirstName('');
    setLastName('');
    setModalWindowState({ isOpen: false, title: '' });
  }

  function delPerson(id: number) {
    let newListOfPersons = listOfPersons.filter((c) => c.id !== id);
    setListOfPersons(newListOfPersons);
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
        func={
          modalWindowState.title === 'Создание сотрудника'
            ? addPerson
            : saveChangedPerson
        }
      />
      <Header />
      <Persons
        listOfPersons={listOfPersons}
        openEditPersonWindow={openEditPersonWindow}
        delPerson={delPerson}
      />
      <Footer openAddPersonWindow={openAddPersonWindow} />
    </div>
  );
}

export default App;
