describe('Покупка аватара для своего тренера', function () {
    it('е2е тест Покупка нового аватара', function () {  // е2е тест Покупка аватара npx cypress open
       cy.visit('/');                   // Идем на сайт pokemonbattle.ru/
       cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');    // ищем инпут почты, вводим USER_LOGIN
       cy.get('#password').type('USER_PASSWORD');        // ищем инпут пароля, вводим USER_PASSWORD
       cy.get('.auth__button').contains('Войти').click(); // ищем кнопку войти, проверяем текст, клик 
       cy.get('.header__id-text_type_profile').contains('train_ID'); // ищем поле ID, проверяем свой ID
       cy.get('.header__container > .header__id').click(); // ищем кнопку профиля, клик
       cy.get('[href="/shop"]').click();                    // ищем кнопку лавки, клик
       cy.get('.available > button').first().click();       // ищем первый доступный аватар, купить
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // ищем поле номера карты, вводим номер
       cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                     // ищем поле даты карты, вводим дату
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');  // ищем поле CVV карты, вводим 125
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');         // ищем поле Имя владельца, вводим NAME
       cy.get('.pay__main-header').should('be.visible');// ищем заголовок с аватаром, видимый
       cy.get('.pay__main-subtitle').should('be.visible').contains('касса');  // ищем подзаголовок, видимый, проверяем текст
       cy.get('.pay-btn').contains('Оплатить').click(); // ищем кнопку Оплатить, проверяем текст, клик
       cy.get('#cardnumber').type('56456');            // вводим код подтверждения СМС
       cy.get('.payment__submit-button').contains('Отправить').click(); // ищем кнопку Отправить, проверяем текст, клик
       cy.get('.payment__padding').should('be.visible');     // ищем табло успешной оплаты, видимая
       cy.get('.success__image').should('be.visible');  // ищем галочку успешной оплаты, видимая
       cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // табличка содержит текст
       cy.get('.payment__adv').click(); // ищем кнопку обратно, клик
       cy.get('.header__container > .header__id').click();// ищем кнопку тренера, клик
       cy.get('.header__container > .top_menu_exit').click();// ищем кнопку выход, клик (разлогин)
    })
})
//  npx cypress open команда запуска из терминала