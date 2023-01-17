const fixtures = require('../fixtures/fixtures.json')

class SignUp {
    get signUpRedirectBtn(){ return $('//android.view.ViewGroup[@content-desc="button-sign-up-container"]/android.view.ViewGroup') }
    get signUpEmailInput(){ return $('//android.widget.EditText[@content-desc="input-email"]') }
    get signUpPasswordInput(){ return $('//android.widget.EditText[@content-desc="input-password"]') }
    get signUpPasswordConfirmInput(){ return $('//android.widget.EditText[@content-desc="input-repeat-password"]') }
    get signUpBtn(){ return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]') }
    get signUpEmailErrorText(){ return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]') }
    get signUpPasswordErrorText(){ return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]') }
    get signUpPasswordConfirmErrorText(){ return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[3]') }
    get signUpPopupOkBtn(){ return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button') }

    async signUpRedirectClick(){
        await this.signUpRedirectBtn.click()
    }
    async signUpInvalid(){
        await this.signUpEmailInput.setValue(fixtures.invalidEmail)
        await this.signUpPasswordInput.setValue(fixtures.invalidPassword)
        await this.signUpPasswordConfirmInput.setValue(fixtures.invalidPassword)
        await this.signUpBtn.click()
    }
    async signUpValid(){
        await this.signUpEmailInput.setValue(fixtures.validEmail)
        await this.signUpPasswordInput.setValue(fixtures.validPassword)
        await this.signUpPasswordConfirmInput.setValue(fixtures.validPassword)
        await this.signUpBtn.click()
        await this.signUpPopupOkBtn.click()
    }
    async signUpInvalidCheck(){
        await expect(this.signUpEmailErrorText).not.toHaveText('')
        await expect(this.signUpPasswordErrorText).not.toHaveText('')
        await expect(this.signUpPasswordConfirmErrorText).not.toHaveText('')
    }
    async signUpValidCheck(){
        await expect(this.signUpEmailErrorText).toHaveText('')
        await expect(this.signUpPasswordErrorText).toHaveText('')
        await expect(this.signUpPasswordConfirmErrorText).toHaveText('')
    }
}

module.exports = new SignUp()