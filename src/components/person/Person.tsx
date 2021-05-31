import css from './Person.module.css';
import { PersonType } from '../../App';

export type PersonPropsType = {
  person: PersonType;
  editPerson: () => void;
  delPerson: (id: number) => void;
};

export const Person: React.FC<PersonPropsType> = ({
  person,
  editPerson,
  delPerson,
}) => {
  let url =
    'https://www.meme-arsenal.com/memes/0f8b809d93c3e2b53cc0badc164a520a.jpg';
  return (
    <div className={css.person}>
      <div className={css.img}>
        <img src={url} alt="" />
      </div>
      <div className={css.name}>{person.firstName}</div>
      <div className={css.name}>{person.lastName}</div>
      <div className={css.btns}>
        <button onClick={editPerson}>редактировать</button>
        <button onClick={() => delPerson(person.id)}>удалить</button>
      </div>
    </div>
  );
};
