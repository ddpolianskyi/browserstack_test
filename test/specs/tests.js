const navbar = require('../pages/Navbar')
const login = require('../pages/Login')
const signUp = require('../pages/SignUp')
const forms = require('../pages/Forms')
const swipe = require('../pages/Swipe')

describe('Login', () => {
    it('Should not log in because of invalid credentials', async () => {
        await navbar.navbarLoginClick()
        await login.loginInvalid()
        await login.loginInvalidCheck()
    })
    it('Should log in with valid credentials', async () => {
        await login.loginValid()
        await login.loginValidCheck()
    })
})

describe('Sign up', () => {
    it('Should not sign up because of invalid credentials', async () => {
        await navbar.navbarLoginClick()
        await signUp.signUpRedirectClick()
        await signUp.signUpInvalid()
        await signUp.signUpInvalidCheck()
    })
    it('Should login with valid credentials', async () => {
        await signUp.signUpValid()
        await signUp.signUpValidCheck()
    })
})

describe('Forms', () => {
    it('Should fill out the form', async () => {
        await navbar.navbarFormsClick()
        await forms.formsFillTheForm()
    })
})

describe('Swipe', () => {
    it('Should swipes by clicking on navigation buttons', async () => {
        await navbar.navbarSwipeClick()
        await swipe.swipeNavClick(2)
        await swipe.swipeNavClick(3)
        await swipe.swipeNavClick(4)
        await swipe.swipeNavClick(5)
        await swipe.swipeNavClick(6)
        await swipe.swipeNavClick(1)
    })
})