import axios from 'axios';
import React from 'react';
import { PersonType } from '../../App';
import { Persons } from './Persons';

export type PersonsContainerPropsType = {
  listOfPersons: Array<PersonType>;
  openEditPersonWindow: (id: number) => void;
  delPerson: (id: number) => void;
  getPersons: (persons: Array<PersonType>) => void;
};

export const PersonsContainer: React.FC<PersonsContainerPropsType> = ({
  listOfPersons,
  openEditPersonWindow,
  delPerson,
  getPersons,
}) => {
  if (listOfPersons.length === 0) {
    axios
      .get('http://localhost:3004/persons')
      .then((response) => {
        getPersons(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <Persons
      listOfPersons={listOfPersons}
      openEditPersonWindow={openEditPersonWindow}
      delPerson={delPerson}
    />
  );
};
