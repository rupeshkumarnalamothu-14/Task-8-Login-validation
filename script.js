function validateLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("loginPass").value;
    let error = document.getElementById("loginError");

    if (user === "" || pass === "") {
        error.innerHTML = "Username and Password are required";
    } else {
        error.innerHTML = "";
        alert("Login Successful");
    }
}

function resetPassword() {
    let newPass = document.getElementById("newPass").value;
    let confirmPass = document.getElementById("confirmPass").value;
    let error = document.getElementById("resetError");

    if (newPass === "" || confirmPass === "") {
        error.innerHTML = "All fields are mandatory";
    }
    else if (newPass !== confirmPass) {
        error.innerHTML = "Passwords do not match";
    }
    else {
        error.innerHTML = "";
        alert("Password changed successfully");
        window.location.href = "index.html";
    }
}
