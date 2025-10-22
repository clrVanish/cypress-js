class BuyAvatar {
    elements = {
        // Форма авторизации
        email_input: () => cy.get('#k_email'),
        password_input: () => cy.get('#k_password'),
        login_button: () => cy.get('.MuiButton-root'),

        // Страница тренера
        trainer_button: () => cy.get('.header_card_trainer'),

        // Страница аватаров
        shop_button: () => cy.get('[data-qa="shop"]'),
        available_items: () => cy.get('.shop__list > .shop__item.available'),
        avatar_button: () => cy.get('.shop__button'),

        // Форма оплаты
        card_number_input: () => cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input'),
        expiry_date_input: () => cy.get(':nth-child(1) > .style_1_base_input'),
        cvv_input: () => cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input'),
        card_holder_input: () => cy.get('.payment_form_card_form_input_last > .style_1_base_input'),

        // Кнопки подтверждения и завершения
        payment_button: () => cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment'),
        confirmation_input: () => cy.get('.style_1_base_input'),
        confirmation_button: () => cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment'),

        // Сообщения
        success_message: () => cy.get('.payment_status_top_title'),
        success_image: () => cy.get('.success__image')
    }

    visit() {
        cy.visit('https://pokemonbattle.ru/');
    }

    login(email, password) {
        this.elements.email_input()
            .should('be.visible')
            .type(email);   // EMAIL
        this.elements.password_input()
            .should('be.visible')
            .type(password);   // EMAIL
        this.elements.login_button()
            .should('be.visible')
            .click()
    }

    view_trainer() {
        this.elements.trainer_button()
            .should('be.visible')
            .click()
    }

    open_avatars() {
        cy.get('[data-qa="shop"]')
            .should('be.visible')
            .click();
    }

    choose_avatar() {
        cy.get('.available > button').first().click()
        /* Упоролся в рандомный выбор...
        cy.get('.shop__list > .shop__item.available')
            .then(($items) => {
                // Создаем массив с номерами доступных элементов
                const availableItems = [];

                // Проходим по всем элементам и добавляем только те, что с классом "available"
                $items.each((index, item) => {
                    if (item.classList.contains('available')) {
                        availableItems.push(item); // Добавляем в список доступных
                    }
                });

                // Генерируем случайный индекс для выбора
                const randomIndex = Math.floor(Math.random() * availableItems.length);

                // Кликаем по случайному доступному аватару
                cy.wrap(availableItems[randomIndex]).find('.shop__button').click();
            });
         */
    }

    try_buy() {
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input')
            .should('be.visible')
            .type('2201382000000021');

        cy.get(':nth-child(1) > .style_1_base_input')
            .should('be.visible')
            .type('1225');

        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input')
            .should('be.visible')
            .type('125');

        cy.get('.payment_form_card_form_input_last > .style_1_base_input')
            .should('be.visible')
            .type('DANIL');

        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment')
            .should('be.visible')
            .click();
    }
    enter_code() {
        cy.get('.style_1_base_input')
            .should('be.visible')
            .type('56456');

        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment')
            .should('be.visible')
            .click()
    }

    buy_check() {
        cy.get('.payment_status_top_title')
            .should('be.visible')
            .contains('Покупка прошла успешно')

        cy.get('.success__image')
            .should('be.visible')
    }

}

export default new BuyAvatar()