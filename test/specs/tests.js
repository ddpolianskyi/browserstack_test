const navbar = require('../pages/Navbar')
const login = require('../pages/Login')
const signUp = require('../pages/SignUp')
const forms = require('../pages/Forms')
const swipe = require('../pages/Swipe')

describe('Login', () => {
    it('should not login', async () => {
        await navbar.navbarLoginClick()
        await login.loginInvalid()
        await login.loginInvalidCheck()
    })
    it('should login', async () => {
        await login.loginValid()
        await login.loginValidCheck()
    })
})

describe('Sign up', () => {
    it('should not sign up', async () => {
        await navbar.navbarLoginClick()
        await signUp.signUpRedirectClick()
        await signUp.signUpInvalid()
        await signUp.signUpInvalidCheck()
    })
    it('should sign up', async () => {
        await signUp.signUpValid()
        await signUp.signUpValidCheck()
    })
})

describe('Forms', () => {
    it('should fill out the form', async () => {
        await navbar.navbarFormsClick()
        await forms.formsFillTheForm()
    })
})

describe('Swipe', () => {
    it('should swipes', async () => {
        await navbar.navbarSwipeClick()
        await swipe.swipeNavClick(2)
        await swipe.swipeNavClick(3)
        await swipe.swipeNavClick(4)
        await swipe.swipeNavClick(5)
        await swipe.swipeNavClick(6)
        await swipe.swipeNavClick(1)
    })
})