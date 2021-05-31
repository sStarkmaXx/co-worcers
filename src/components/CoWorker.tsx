import css from './CoWorker.module.css';

export type CoWorkerPropsType = {
  firstName: string;
  lastName: string;
  editCoWorker: () => void;
};

export const CoWorker: React.FC<CoWorkerPropsType> = ({
  firstName,
  lastName,
  editCoWorker,
}) => {
  let url =
    'https://www.meme-arsenal.com/memes/0f8b809d93c3e2b53cc0badc164a520a.jpg';
  return (
    <div className={css.coworker}>
      <div className={css.img}>
        <img src={url} alt="" />
      </div>
      <div className={css.name}>{firstName}</div>
      <div className={css.name}>{lastName}</div>
      <div className={css.btns}>
        <button onClick={editCoWorker}>редактировать</button>
        <button>удалить</button>
      </div>
    </div>
  );
};
