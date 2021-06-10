import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header';
import { ModalWindow } from './components/modalwindow/ModalWindow';
import { PersonsContainer } from './components/persons/PersonsContainer';

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
  const [listOfPersons, setListOfPersons] = useState<Array<PersonType>>([]);

  const [modalWindowState, setModalWindowState] = useState<ModalWindowsState>({
    isOpen: false,
    title: '',
  });
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [selectPersonId, setSelectPersonId] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  function getPersons(persons: Array<PersonType>) {
    setListOfPersons(persons);
  }

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
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      axios
        .post('http://localhost:3004/persons', newPerson)
        .then((response) => {
          newPerson = response.data;
          let newListOfPersons: Array<PersonType> = [
            ...listOfPersons,
            newPerson,
          ];
          setListOfPersons(newListOfPersons);
          setFirstName('');
          setLastName('');
          setModalWindowState({ isOpen: false, title: '' });
          setError(null);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      setError('Пожалуйста заполните все поля');
    }
  }

  function openEditPersonWindow(id: number) {
    setModalWindowState({ isOpen: true, title: 'Редактирование сотрудника' });
    let selectPerson = listOfPersons.find((pers) => pers.id === id);
    setFirstName(selectPerson!.firstName);
    setLastName(selectPerson!.lastName);
    setSelectPersonId(id);
  }

  function saveChangedPerson() {
    let newListWithCangedPerson: Array<PersonType> = listOfPersons.map((pers) =>
      pers.id === selectPersonId ? { ...pers, firstName, lastName } : pers
    );
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      axios
        .put(`http://localhost:3004/persons/${selectPersonId}`, {
          id: null,
          firstName,
          lastName,
        })
        .then((response) => {
          setListOfPersons(newListWithCangedPerson);
          setModalWindowState({ isOpen: false, title: '' });
          setFirstName('');
          setLastName('');
          setError(null);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      setError('Пожалуйста заполните все поля');
    }
  }

  function delPerson(id: number) {
    axios
      .delete(`http://localhost:3004/persons/${id}`)
      .then()
      .catch((error) => {
        alert(error);
      });
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
        error={error}
        func={
          modalWindowState.title === 'Создание сотрудника'
            ? addPerson
            : saveChangedPerson
        }
      />
      <div className="conteiner">
        <Header />
        <PersonsContainer
          listOfPersons={listOfPersons}
          openEditPersonWindow={openEditPersonWindow}
          delPerson={delPerson}
          getPersons={getPersons}
        />

        <Footer openAddPersonWindow={openAddPersonWindow} />
      </div>
    </div>
  );
}

export default App;
