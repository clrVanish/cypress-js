import LoginPage from '../functions/auth'

describe('Проверка авторизации', function () {

    it('Верные лог и пасс', function () {
        LoginPage.visit();
        LoginPage.login('german@dolnikov.ru', 'qa_one_love1');
        LoginPage.check_message('Авторизация прошла успешно');
        LoginPage.close_message();
    })

    it('Проверка восстановления пароля', function () {
        LoginPage.visit();
        LoginPage.restore_password('dslent@yandex.ru');
        LoginPage.check_message('Успешно отправили пароль на e-mail');
        LoginPage.close_message();
    })

    it('Верный лог и НЕверный пасс', function () {
        LoginPage.visit();
        LoginPage.login('german@dolnikov.ru', 'i_love_auto');
        LoginPage.check_message('Такого логина или пароля нет');
        LoginPage.close_message();
    })

    it('Неверный лог и верный пасс', function () {
        LoginPage.visit();
        LoginPage.login('dslent@yandex.ru', 'qa_one_love1');
        LoginPage.check_message('Такого логина или пароля нет');
        LoginPage.close_message();
    })

    it('Проверка валидации', function () {
        LoginPage.visit();
        LoginPage.login('germandolnikov.ru', 'qa_one_love1');
        LoginPage.check_message('Нужно исправить проблему валидации');
    })

    it('Проверка на строчные буквы в логине', function () {
        LoginPage.visit();
        LoginPage.login('GerMan@Dolnikov.ru', 'qa_one_love1');
        LoginPage.check_message('Авторизация прошла успешно');
        LoginPage.close_message();
    })
})