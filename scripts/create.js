function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function create() {

    event.preventDefault()

    firstName = document.getElementById('firstName').value
    lastName = document.getElementById('lastName').value
    username = document.getElementById('username').value
    password = document.getElementById('password').value

    const userInfo = {
        firstName: firstName,
        lastName: lastName,
        username: username, 
        password: password
    }

    fetch('https://marcelochat.herokuapp.com/', {
        mode: 'no-cors'
    })
    .then(res => res.json())
    .then(resp => {
        console.log(resp)
    })
}