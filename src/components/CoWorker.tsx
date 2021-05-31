import { coWorcerType } from '../App';
import css from './CoWorker.module.css';

export type CoWorkerPropsType = {
  coWorker: coWorcerType;
  editCoWorker: () => void;
  delCoWorker: (id: number) => void;
};

export const CoWorker: React.FC<CoWorkerPropsType> = ({
  coWorker,
  editCoWorker,
  delCoWorker,
}) => {
  let url =
    'https://www.meme-arsenal.com/memes/0f8b809d93c3e2b53cc0badc164a520a.jpg';
  return (
    <div className={css.coworker}>
      <div className={css.img}>
        <img src={url} alt="" />
      </div>
      <div className={css.name}>{coWorker.firstName}</div>
      <div className={css.name}>{coWorker.lastName}</div>
      <div className={css.btns}>
        <button onClick={editCoWorker}>редактировать</button>
        <button onClick={() => delCoWorker(coWorker.id)}>удалить</button>
      </div>
    </div>
  );
};
