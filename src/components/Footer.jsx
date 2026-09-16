import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer container">
      <p className="footer__text">
        &copy; {currentYear} Анна Аннушкина. Все права защищены.
      </p>
      <nav className="footer__nav">
        <a href="#hero" className="footer__link">
          Наверх
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
