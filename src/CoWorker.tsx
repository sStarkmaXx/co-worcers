import './App.css';
import { coWorcerType } from './App';
import css from './CoWorker.module.css';

export type CoWorkerPropsType = {
  firstName: string;
  lastName: string;
};

export const CoWorker: React.FC<CoWorkerPropsType> = ({
  firstName,
  lastName,
}) => {
  let url =
    'https://sun9-14.userapi.com/impg/_DWPIeg0FrAVuCJ7-Yiyce9qpe0d7M5TfsUAHA/Z1oyh58K5z8.jpg?size=2560x1707&quality=95&sign=0240df8a390c8a4631c77afca4dfa549&type=album';
  return (
    <div className={css.coworcer}>
      <img src={url} alt="" />
      <div className={css.name}>{firstName}</div>
      <div className={css.name}>{lastName}</div>
      <button>редактировать</button>
      <button>удалить</button>
    </div>
  );
};
