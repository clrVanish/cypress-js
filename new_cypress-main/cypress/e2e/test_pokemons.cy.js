import BuyAvatar from '../functions/buy_avatar'

describe('Проверка покупки аватара', function () {

    it('Проверяем покупку аватара', function () {
        // Open site
        BuyAvatar.visit()

        // Auth
        // BuyAvatar.login('USER_LOGIN', 'USER_PASSWORD')
        BuyAvatar.login('dslent@yandex.ru', '1eBiPAH7i5tn!RU')

        // Open trainer
        BuyAvatar.view_trainer()

        // Open avatars
        BuyAvatar.open_avatars()

        // Choose avatar
        BuyAvatar.choose_avatar()

        // Fill out the form and buy
        BuyAvatar.try_buy()

        // Enter the code
        BuyAvatar.enter_code()

        // Check true buy
        BuyAvatar.buy_check()
    })
})