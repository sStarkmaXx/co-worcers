import css from './Footer.module.css';

export type FooterPropsType = {
  addPerson: () => void;
};

export const Footer: React.FC<FooterPropsType> = ({ addPerson }) => {
  return (
    <div className={css.footer}>
      <button onClick={addPerson}>Добавить сотрудника</button>
    </div>
  );
};
