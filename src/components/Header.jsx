import "../styles/header.css";

function Header() {
  return (
    <header className="header container">
      <a href="#hero" className="header__logo">
        Анна Аннушкина
      </a>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="#about" className="header__link">
              Обо мне
            </a>
          </li>
          <li className="header__item">
            <a href="#gallery" className="header__link">
              Портфолио
            </a>
          </li>
          <li className="header__item">
            <a href="#contact" className="header__link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
