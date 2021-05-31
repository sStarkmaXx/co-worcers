import { ModalWindowsState } from '../App';
import css from './ModalWindow.module.css';

export type ModalWindowPropsType = {
  modalWindowState: ModalWindowsState;
  hideModalWindow: () => void;
};

export const ModalWindow: React.FC<ModalWindowPropsType> = ({
  modalWindowState,
  hideModalWindow,
}) => {
  let style = {};
  modalWindowState.isOpen && (style = { display: 'flex' });
  return (
    <div className={css.layout} style={style}>
      <div className={css.window}>
        <div className={css.header}>{modalWindowState.title}</div>
        <div className={css.back}>
          <button onClick={hideModalWindow}>Назад к списку</button>
        </div>
        <div className={css.body}>
          <input type="text" />
          <input type="text" />
        </div>
        <div className={css.footer}>
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  );
};
