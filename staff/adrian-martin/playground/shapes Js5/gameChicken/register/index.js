var view = new Component(document.body)
view.addClass('View')

var title = new Heading(1)
title.setText('Register')
title.onClick(function(){
    alert('By clicking on this title you wont get anithing')
})

// var registerForm = new RegisterForm()
// registerForm.onSubmit(function(event){
//     event.preventDefault()

//     var email = registerForm.getEmail()
//     var username = registerForm.getUsername()
//     var password = registerForm.getPassword()
//     // var passwordRepeat = registerForm.getRetypePassword()

//     var usersJson = localStorage.users

//     if(!usersJson) usersJson = '[]'

//     var users = JSON.parse(usersJson)

//     var user = {
//         email: email,
//         username: username,
//         password: password
//     }

//     users.push(user)

//     usersJson = JSON.stringify(users)

//     localStorage.users = usersJson

//     registerForm.reset()
// })

var registerForm = new RegisterForm
registerForm.onSubmit(function (event) {
    event.preventDefault()

    var email = registerForm.getEmail()
    var username = registerForm.getUsername()
    var password = registerForm.getPassword()
    var passwordRepeat = registerForm.getPasswordRepeat()

    var usersJson = localStorage.users

    if (!usersJson) usersJson = '[]'

    var users = JSON.parse(usersJson)

    var user = users.find(function (user) {
        return user.email === email || user.username === username
    })

    if (user) {
        alert('user already exists')

        return
    }

    if (password !== passwordRepeat) {
        alert('passwords don\'t match')

        return
    }

    user = {
        email: email,
        username: username,
        password: password
    }

    users.push(user)

    usersJson = JSON.stringify(users)

    localStorage.users = usersJson

    registerForm.clear()
})

var loginLink = new Link
loginLink.setText('Login')
// loginLink.setUrl('../login')

loginLink.onClick(function(event) {
    event.preventDefault()

    setTimeout(function(){
        location.href = '../login'
    }, 500)
})

view.add(title)
view.add(registerForm)
view.add(loginLink)