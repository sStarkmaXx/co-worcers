import { PersonType } from '../../App';
import { Person } from '../person/Person';

export type CoWorkersPropsType = {
  listOfPersons: Array<PersonType>;
  openEditPersonWindow: (id: number) => void;
  delPerson: (id: number) => void;
};

export const Persons: React.FC<CoWorkersPropsType> = ({
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
  return <div className="coworkers">{person}</div>;
};
