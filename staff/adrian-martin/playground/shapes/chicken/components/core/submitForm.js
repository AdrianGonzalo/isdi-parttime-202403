function SubmitButton(text) {
   Button.call(this)

   this.addClass('submitButton')

   this.setType('submit')
   this.setText(text)
}

SubmitButton.prototype = Object.create(Button.prototype)
SubmitButton.prototype.constructor = SubmitButton