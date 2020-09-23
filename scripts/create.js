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

    var config = {
        mode: 'no-cors',
        method: 'GET',
        headers: {
            "Content-Type":"application/json"
        },
        body: userInfo
    }

    var iconfig = {
        method: "GET",
        mode: "no-cors"
    }

    fetch('https://marcelochat.herokuapp.com/',iconfig)
    .then(res => res.json())
    .then(resp => {
        console.log(resp)
    })

    console.log(userInfo)
}