/*
===== функции для https://login.qa.studio/ =====
 */
class LoginPage {
    elements = {
        // Форма логина и пароля
        email_input: () => cy.get('#mail'),
        password_input: () => cy.get('#pass'),
        login_button: () => cy.get('#loginButton'),
        forgot_button: () => cy.get('#forgotEmailButton'),

        // Страница восстановления пароля
        forgot_header: () => cy.get('#forgotForm > .header'),
        forgot_email_input: () => cy.get('#mailForgot'),
        restore_button: () => cy.get('#restoreEmailButton'),

        // Страница с выводом инфы
        message_header: () => cy.get('#messageHeader'),
        exit_button: () => cy.get('#exitMessageButton > .exitIcon'),
    }

    visit() {
        cy.visit('https://login.qa.studio/');
    }

    login(email, password) {
        this.elements.email_input()
            .should('be.visible')
            .type(email);
        this.elements.password_input()
            .should('be.visible')
            .type(password);
        this.elements.login_button()
            .should('be.visible')
            .click();
    }

    check_message(text) {
        this.elements.message_header()
            .should('be.visible')
            .contains(text);
    }

    close_message() {
        this.elements.exit_button()
            .should('be.visible');
    }

    restore_password(email) {
        this.elements.forgot_button()
            .should('be.visible')
            .click();
        this.elements.forgot_header()
            .should('be.visible')
            .contains('Восстановите пароль');
        this.elements.forgot_email_input()
            .should('be.visible')
            .type(email);
        this.elements.restore_button()
            .should('be.visible')
            .click();
    }
}

export default new LoginPage();