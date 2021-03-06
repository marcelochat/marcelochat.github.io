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

    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const userInfo = {
        firstName: firstName,
        lastName: lastName,
        username: username, 
        password: password
    }

    console.log(userInfo)

    const config = {
        method: "POST",
        mode: "no-cors",
        body: userInfo
    }

    fetch('https://marcelochat.herokuapp.com/create', config)
    .then(res => res.json())
    .then(resp => {
        console.log(resp)
    })
}