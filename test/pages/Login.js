const fixtures = require('../fixtures/fixtures.json')

class Login {
    get loginEmailInput(){ return $('//android.widget.EditText[@content-desc="input-email"]') }
    get loginPasswordInput(){ return $('//android.widget.EditText[@content-desc="input-password"]') }
    get loginSubmitBtn(){ return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]') }
    get loginSuccessBtn(){ return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button') }
    get loginEmailErrorText(){ return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]') }
    get loginPasswordErrorText(){ return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]') }
    
    async loginInvalid(){
        await this.loginEmailInput.setValue(fixtures.invalidEmail)
        await this.loginPasswordInput.setValue(fixtures.invalidPassword)
        await this.loginSubmitBtn.click()
    }
    async loginValid(){
        await this.loginEmailInput.setValue(fixtures.validEmail)
        await this.loginPasswordInput.setValue(fixtures.validPassword)
        await this.loginSubmitBtn.click()
        await this.loginSuccessBtn.click()
    }
    async loginInvalidCheck(){
        await expect(this.loginEmailErrorText).not.toHaveText('')
        await expect(this.loginPasswordErrorText).not.toHaveText('')
    }
    async loginValidCheck(){
        await expect(this.loginEmailErrorText).toHaveText('')
        await expect(this.loginPasswordErrorText).toHaveText('')
    }
}

module.exports = new Login()