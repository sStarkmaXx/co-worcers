import { PersonType } from '../../App';
import { Person } from '../person/Person';
import css from './Persons.module.css';

export type PersonsPropsType = {
  listOfPersons: Array<PersonType>;
  openEditPersonWindow: (id: number) => void;
  delPerson: (id: number) => void;
};

export const Persons: React.FC<PersonsPropsType> = ({
  listOfPersons,
  openEditPersonWindow,
  delPerson,
}) => {
  let person = listOfPersons.map((pers) => {
    return (
      <Person
        key={pers.id}
        person={pers}
        openEditPersonWindow={openEditPersonWindow}
        delPerson={delPerson}
      />
    );
  });
  return <div className={css.persons}>{person}</div>;
};
