function Input() {
    Component.call(this, 'input')

    this.addClass('input')
}

Input.prototype = Object.create(Component.prototype)
Input.prototype.constructor = Input

Input.prototype.setType = function(type) {
    this.container.type = type
}

Input.prototype.setPlaceholder = function(placeholder){
    this.container.placeholder = placeholder
}