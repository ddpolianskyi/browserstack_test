class Forms {
    get formsInput(){ return $('//android.widget.EditText[@content-desc="text-input"]') }
    get formsInputResult(){ return $('//android.widget.TextView[@content-desc="input-text-result"]') }
    get formsSwitch(){ return $('//android.widget.Switch[@content-desc="switch"]') }
    get formsDropdown(){ return $('//android.view.ViewGroup[@content-desc="Dropdown"]') }
    get formsDropdownItem(){ return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]') }
    get formsActiveBtn(){ return $('//android.view.ViewGroup[@content-desc="button-Active"]') }
    get formsActiveBtnPopupOkBtn(){ return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[3]') }

    async formsFillTheForm(){
        await this.formsInput.setValue('hey')
        await this.formsSwitch.click()
        await this.formsDropdown.click()
        await this.formsDropdownItem.click()
        await this.formsActiveBtn.click()
        await this.formsActiveBtnPopupOkBtn.click()
    }
}

module.exports = new Forms()