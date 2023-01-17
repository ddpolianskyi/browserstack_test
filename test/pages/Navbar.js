class Navbar {
    get navbarHomeBtn(){ return $('//android.widget.Button[@content-desc="Home"]') }
    get navbarWebviewBtn(){ return $('//android.widget.Button[@content-desc="Webview"]') }
    get navbarLoginBtn(){ return $('//android.widget.Button[@content-desc="Login"]') }
    get navbarFormsBtn(){ return $('//android.widget.Button[@content-desc="Forms"]') }
    get navbarSwipeBtn(){ return $('//android.widget.Button[@content-desc="Swipe"]') }
    get navbarDragBtn(){ return $('//android.widget.Button[@content-desc="Drag"]') }

    async navbarHomeClick(){ await this.navbarHomeBtn.click() }
    async navbarWebviewClick(){ await this.navbarWebviewBtn.click() }
    async navbarLoginClick(){ await this.navbarLoginBtn.click() }
    async navbarFormsClick(){ await this.navbarFormsBtn.click() }
    async navbarSwipeClick(){ await this.navbarSwipeBtn.click() }
    async navbarDragClick(){ await this.navbarDragBtn.click() }
}

module.exports = new Navbar()