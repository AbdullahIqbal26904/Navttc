function saveUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
        document.getElementById("signUpMsg").textContent = "Username already exists";
    } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById("signUpMsg").textContent = "Account created successfully";
    }
}

function validateUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || {};
    return users[username] === password;
}

document.getElementById('loginButton').addEventListener('click', () => {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    if (validateUser(username, password)) {
        localStorage.setItem("show",JSON.stringify(username))
        window.location.href = 'index.html';  
    } else {
        document.getElementById("loginMsg").textContent = "Invalid username or password";
    }
});

document.getElementById('showSignUp').addEventListener('click', () => {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signUpForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', () => {
    document.getElementById('signUpForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('container');
});

document.getElementById('signUpButton').addEventListener('click', () => {
    let username = document.getElementById("signUpUsername").value;
    let password = document.getElementById("signUpPassword").value;
    if (username && password) {
        saveUser(username, password);
    } else {
        document.getElementById("signUpMsg").textContent = "Please enter a username and password";
    }
});

