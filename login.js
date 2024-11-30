validUsername = 'basliel'
validPassword = 'assefa'

document.getElementById('login-btn').addEventListener('click', logIn)

function logIn(){
    username = document.getElementById('username').value
    password = document.getElementById('password').value
    if (username == validUsername && password == validPassword){
        location.href = 'index.html'
    }
    else{
        document.getElementById('errorMessage').innerHTML = 'Incorrect combination of username and password!'
    }
}