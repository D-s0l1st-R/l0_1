import React, { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Имя обязательно";
    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }
    if (!formData.message.trim()) newErrors.message = "Сообщение обязательно";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section contact container">
      <h2>Свяжитесь со мной</h2>
      <p className="contact__intro">
        Хотите забронировать дату съёмки или просто задать вопрос? Я всегда
        открыта для общения.
      </p>

      <article className="contact__wrapper">
        <address className="contact__info">
          <h3>Контактная информация</h3>
          <p>
            Телефон / WhatsApp:{" "}
            <a href="tel:+79991234567">+7 (999) 123-45-67</a>
          </p>
          <p>
            Telegram:{" "}
            <a
              href="https://t.me/anna_annushkina_photo"
              target="_blank"
              rel="noopener noreferrer"
            >
              @anna_annushkina_photo
            </a>
          </p>
          <p>
            Email: <a href="mailto:hello@annaphoto.ru">hello@annaphoto.ru</a>
          </p>
        </address>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <h3>Написать сообщение</h3>

          <label htmlFor="name" className="form__label">
            Ваше имя
            <input
              type="text"
              id="name"
              name="name"
              className={`form__input ${errors.name ? "error" : ""}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
            />
            {errors.name && <span className="form__error">{errors.name}</span>}
          </label>

          <label htmlFor="email" className="form__label">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className={`form__input ${errors.email ? "error" : ""}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.ru"
            />
            {errors.email && (
              <span className="form__error">{errors.email}</span>
            )}
          </label>

          <label htmlFor="message" className="form__label">
            Сообщение
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`form__textarea ${errors.message ? "error" : ""}`}
              value={formData.message}
              onChange={handleChange}
              placeholder="Расскажите о вашей идее..."
            />
            {errors.message && (
              <span className="form__error">{errors.message}</span>
            )}
          </label>

          <button type="submit" className="button form__submit">
            Отправить
          </button>
          {isSubmitted && (
            <p className="form__success">Сообщение успешно отправлено!</p>
          )}
        </form>
      </article>
    </section>
  );
}

export default Contact;
