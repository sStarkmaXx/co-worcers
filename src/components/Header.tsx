import css from './Header.module.css';

function Header() {
  return (
    <div className={css.header}>
      <div className={css.name}>Имя</div>
      <div className={css.name}>Фамилия</div>
    </div>
  );
}

export default Header;
