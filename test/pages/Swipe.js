class Swipe {
    swipeNavBtn(num){ return $(`//android.view.ViewGroup[@content-desc="Carousel"]/android.view.ViewGroup/android.view.ViewGroup[${num}]/android.view.ViewGroup`) }

    async swipeNavClick(num){
        await this.swipeNavBtn(num).click()
    }
}

module.exports = new Swipe()