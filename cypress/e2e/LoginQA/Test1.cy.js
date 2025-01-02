describe('Автотесты проверка авторизации login.qa.studio', function () {

      it('Верный логин и верный пароль', function () {  // проверка пары верный логин верный пароль
         cy.visit('/');                   // Идем на сайт login.qa.studio (подстановка BaseUrl из конфига)
         cy.get('#mail').type('german@dolnikov.ru');    // ищем инпут почты, вводим german@dolnikov.ru
         cy.get('#pass').type('iLoveqastudio1');        // ищем инпут пароля, вводим iLoveqastudio1
         cy.get('#loginButton').contains('Войти').click(); // ищем кнопку войти, проверяем текст, клик по кнопке 
         cy.get('#messageHeader').should('be.visible'); // ищем сообщение, дб видимым
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // сообщение содержит текст
         cy.get('#exitMessageButton > .exitIcon');      // сообщение содержит крестик
      })
      it('Восстановление пароля', function () {       // проверка восстановления пароля 
         cy.visit('/');                 // Идем на сайт login.qa.studio
         cy.get('#forgotEmailButton').contains('Забыли пароль?');    // ищем кнопку забыли пароль, проверяем текст
         cy.get('#forgotEmailButton').click();        // клик по кнопке забыли пароль
         cy.get('#forgotForm').should('be.visible');  // ищем форму восстановления пароля, дб видима
         cy.get('#exitRestoreButton > .exitIcon');    // форма содержит крестик 
         cy.get('#forgotForm > .header').contains('Восстановите пароль');// заголовок формы, проверяем текст
         cy.get('#mailForgot').type('ger@mail.ru');  // ищем инпут почты, вводим некую почту 
         cy.get('#restoreEmailButton').contains('Отправить код').should('be.visible'); // ищем кнопку, проверяем текст, дб видимой
         cy.get('#restoreEmailButton').click();// клик на кнопку отправить
         cy.get('#message').should('be.visible');// ищем сообщение, дб видимым
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // ищем заголовок, проверяем текст
         cy.get('#exitMessageButton > .exitIcon');      // сообщение содержит крестик выхода
      })
      it('Верный логин и неверный пароль', function () {  // проверка пары верный логин неверный пароль
         cy.visit('/');                   // Идем на сайт login.qa.studio (подстановка BaseUrl из конфига)
         cy.get('#mail').type('german@dolnikov.ru');    // ищем инпут почты, вводим german@dolnikov.ru
         cy.get('#pass').type('iloveqastudio1');        // ищем инпут пароля, вводим iloveqastudio1
         cy.get('#loginButton').contains('Войти').click(); // ищем кнопку войти, проверяем текст, клик по кнопке 
         cy.get('#message').should('be.visible'); // ищем сообщение, дб видимым
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // ищем заголовок, проверяем текст
         cy.get('#exitMessageButton > .exitIcon');      // сообщение содержит крестик
      })
      it('Неверный логин и верный пароль', function () {  // проверка пары неверный логин верный пароль
         cy.visit('/');                   // Идем на сайт login.qa.studio (подстановка BaseUrl из конфига)
         cy.get('#mail').type('germann@dolnikov.ru');    // ищем инпут почты, вводим germann@dolnikov.ru
         cy.get('#pass').type('iLoveqastudio1');        // ищем инпут пароля, вводим iLoveqastudio1
         cy.get('#loginButton').contains('Войти').click(); // ищем кнопку войти, проверяем текст, клик по кнопке 
         cy.get('#message').should('be.visible'); // ищем сообщение, дб видимым
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // ищем заголовок, проверяем текст
         cy.get('#exitMessageButton > .exitIcon');      // сообщение содержит крестик
      })
      it('Логин без @ и верный пароль', function () {  // проверка пары неверный логин верный пароль
         cy.visit('/');                   // Идем на сайт login.qa.studio (подстановка BaseUrl из конфига)
         cy.get('#mail').type('germandolnikov.ru');    // ищем инпут почты, вводим germandolnikov.ru
         cy.get('#pass').type('iLoveqastudio1');        // ищем инпут пароля, вводим iLoveqastudio1
         cy.get('#loginButton').contains('Войти').click(); // ищем кнопку войти, проверяем текст, клик по кнопке 
         cy.get('#message').should('be.visible'); // ищем сообщение, дб видимым
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // ищем заголовок, проверяем текст
         cy.get('#exitMessageButton > .exitIcon');      // сообщение содержит крестик
      })
      it('Проверка приведения к нижнему регистру', function () {  // проверка пары верный логин с произвольным регистром,верный пароль
         cy.visit('/');                   // Идем на сайт login.qa.studio (подстановка BaseUrl из конфига)
         cy.get('#mail').type('GeRmaN@DolNikov.ru');    // ищем инпут почты, вводим GeRmaN@DolNikov.ru
         cy.get('#pass').type('iLoveqastudio1');        // ищем инпут пароля, вводим iLoveqastudio1
         cy.get('#loginButton').contains('Войти').click(); // ищем кнопку войти, проверяем текст, клик по кнопке 
         cy.get('#messageHeader').should('be.visible'); // ищем сообщение, дб видимым
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // сообщение содержит текст
         cy.get('#exitMessageButton > .exitIcon');      // сообщение содержит крестик
      })
})



// npx cypress run --spec cypress/e2e/Test1.cy.js --browser chrome // запуск автотеста /e2e/Test1.cy.js браузер chrome