document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get user input values
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Get error message elements
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    // Retrieve stored user data from localStorage
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (!storedUsername || !storedPassword) {
        passwordError.textContent = "No account found. Please sign up first.";
        return;
    }

    // Check if entered username and password match stored credentials
    if (username === storedUsername && password === storedPassword) {
        alert("Login Successful!");
        console.log("Logged-in User:", { username });
    } else {
        passwordError.textContent = "Invalid username or password.";
    }
});
