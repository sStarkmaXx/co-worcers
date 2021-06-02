import { ChangeEvent } from 'react';
import { ModalWindowsState } from '../../App';
import css from './ModalWindow.module.css';

export type ModalWindowPropsType = {
  firstName: string;
  lastName: string;
  modalWindowState: ModalWindowsState;
  hideModalWindow: () => void;
  createFirstName: (e: ChangeEvent<HTMLInputElement>) => void;
  createLastName: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  func: () => void;
};

export const ModalWindow: React.FC<ModalWindowPropsType> = ({
  firstName,
  lastName,
  modalWindowState,
  hideModalWindow,
  createFirstName,
  createLastName,
  error,
  func,
}) => {
  let style = {};
  modalWindowState.isOpen && (style = { display: 'flex' });

  return (
    <div className={css.layout} style={style}>
      <div className={css.window}>
        <div className={css.header}>{modalWindowState.title}</div>
        <div className={css.back}>
          <button onClick={hideModalWindow}>Назад к списку</button>
          {error && <div className={css.errorMessage}>{error}</div>}
        </div>
        <div className={css.body}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => createFirstName(e)}
            placeholder="Введите имя"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => createLastName(e)}
            placeholder="Введите фамилию"
          />
        </div>
        <div className={css.footer}>
          <button onClick={func}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};
