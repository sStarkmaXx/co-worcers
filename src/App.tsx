import React, { useState } from 'react';
import './App.css';
import { CoWorkers } from './components/CoWorkers';
import Header from './components/Header';
import { ModalWindow } from './components/ModalWindow';

export type coWorcerType = {
  id: number;
  firstName: string;
  lastName: string;
};

let initialState: Array<coWorcerType> = [
  { id: 1, firstName: 'Maxim', lastName: 'Myasnikov' },
  { id: 2, firstName: 'John', lastName: 'Boo' },
  { id: 3, firstName: 'Michael', lastName: 'Robinson' },
  { id: 4, firstName: 'Alexandr', lastName: 'Robson' },
];

function App() {
  const [coWorcersList, setCoWorcwersList] =
    useState<Array<coWorcerType>>(initialState);
  return (
    <div className="App">
      <ModalWindow />
      <Header />
      <CoWorkers coWorcersList={coWorcersList} />
    </div>
  );
}

export default App;
