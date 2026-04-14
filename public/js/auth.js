//User Registration function
function registerUser(){
    let name = document.getElementById("name").value;
    let userpassword = document.getElementById("password").value;
    let useremail = document.getElementById("email").value;
    let userphone = document.getElementById("phone").value;
    let useraddress = document.getElementById("address").value;

    fetch('http://localhost:8080/api/v1/auth/register',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            userName:name,
            email:useremail, 
            password:userpassword, 
            address:useraddress,
            phone:userphone
        })
    })
    .then(body => body.json())
    .then(data => {
        alert(data.message);
        console.log(data.message);
    })
}

//User Login Function
function login(){
    let userpassword = document.getElementById("password").value;
    let useremail = document.getElementById("email").value;

    fetch('http://localhost:8080/api/v1/auth/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:useremail, 
            password:userpassword, 
        })
    })
    .then(body => body.json())
    .then(data => {
        alert(data.message);
        console.log(data.message);
    })
}

const loginSpan = document.getElementById("loginSpan");
loginSpan.onclick = Response.redirect('/login.html');