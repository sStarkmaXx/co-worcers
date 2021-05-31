import { PersonType } from '../../App';
import { Person } from '../person/Person';

export type CoWorkersPropsType = {
  listOfPersons: Array<PersonType>;
  editPerson: () => void;
  delPerson: (id: number) => void;
};

export const Persons: React.FC<CoWorkersPropsType> = ({
  listOfPersons,
  editPerson,
  delPerson,
}) => {
  let person = listOfPersons.map((pers) => {
    return (
      <Person
        key={pers.id}
        person={pers}
        editPerson={editPerson}
        delPerson={delPerson}
      />
    );
  });
  return <div className="coworkers">{person}</div>;
};
