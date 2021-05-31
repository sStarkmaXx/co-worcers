import css from './ModalWindow.module.css';

export const ModalWindow = () => {
  return (
    <div className={css.layout}>
      <div className={css.window}>
        <div className={css.header}>Создание сотрудника</div>
        <div className={css.back}>Назад к списку</div>
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
