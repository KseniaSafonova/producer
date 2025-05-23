<template>
  <BaseContainer tag="section" class="privacy-policy">
    <h1>Политика конфиденциальности</h1>
    <p class="date">Дата размещения: май 2025 г.</p>

    <p>
      Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных
      данных, предоставляемых пользователями на сайте
      <a href="https://glebpetrov.com">glebpetrov.com</a>, принадлежащем Глебу Петрову, креативному
      продюсеру.
    </p>

    <h2>1. Общие положения</h2>
    <ul>
      <li>
        Политика составлена в соответствии с Законом РБ от 07.05.2021 № 99-З «О защите персональных
        данных».
      </li>
      <li>
        Персональные данные предоставляются добровольно при заполнении форм (имя, e-mail, и пр.).
      </li>
      <li>Использование Сайта означает согласие с данной Политикой.</li>
    </ul>

    <h2>2. Цели сбора персональных данных</h2>
    <ul>
      <li>Обратная связь и ответы на запросы;</li>
      <li>Заключение договоров о сотрудничестве;</li>
      <li>Аналитика посещаемости сайта.</li>
    </ul>

    <h2>3. Обработка и хранение данных</h2>
    <ul>
      <li>Хранятся не дольше необходимого срока;</li>
      <li>Не передаются третьим лицам без согласия, кроме случаев, предусмотренных законом.</li>
    </ul>

    <h2>4. Защита данных</h2>
    <p>
      Применяются технические и организационные меры для защиты от несанкционированного доступа и
      уничтожения данных.
    </p>

    <h2>5. Права пользователя</h2>
    <ul>
      <li>на доступ, изменение или удаление своих данных;</li>
      <li>на отзыв согласия на обработку.</li>
    </ul>
    <p>
      Запрос можно направить на email: <a href="mailto:info@glebpetrov.com">info@glebpetrov.com</a>
    </p>

    <h2>6. Использование cookie</h2>
    <p>Сайт может использовать cookie. Пользователь может отключить их в браузере.</p>

    <h2>7. Обратная связь</h2>
    <p>
      Глеб Петров<br />
      E-mail: <a href="mailto:info@glebpetrov.com">info@glebpetrov.com</a><br />
      Телефон: <a href="tel:+375293725243">+375 29 372 52 43</a>
    </p>

    <h2>8. Изменения политики</h2>
    <p>
      Актуальная версия доступна на этой странице. Возможны изменения без предварительного
      уведомления.
    </p>
  </BaseContainer>
</template>

<script>
export default {
  name: 'PagePrivacyPolycy',
}
</script>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 1rem;
  font-family: sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #333;
}
.privacy-policy h1 {
  font-size: 24px;
  margin-bottom: 1rem;
  font-weight: bold;
}
.privacy-policy h2 {
  font-size: 18px;
  margin-top: 2rem;
  font-weight: bold;
}
.privacy-policy ul {
  padding-left: 1.2rem;
  margin-top: 0.5rem;
}
.privacy-policy li {
  margin-bottom: 0.5rem;
}
.privacy-policy a {
  color: #0077cc;
  text-decoration: underline;
}
.privacy-policy .date {
  font-style: italic;
  margin-bottom: 1.5rem;
  display: block;
}
</style>
