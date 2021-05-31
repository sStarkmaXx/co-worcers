import css from './Footer.module.css';

export type FooterPropsType = {
  openAddPersonWindow: () => void;
};

export const Footer: React.FC<FooterPropsType> = ({ openAddPersonWindow }) => {
  return (
    <div className={css.footer}>
      <button onClick={openAddPersonWindow}>Добавить сотрудника</button>
    </div>
  );
};
