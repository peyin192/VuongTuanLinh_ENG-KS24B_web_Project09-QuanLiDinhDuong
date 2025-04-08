document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupButton").addEventListener("click", function (event) {
        event.preventDefault();

        let email = document.getElementById("emailSignup").value.trim();
        let password = document.getElementById("passwordSignup").value.trim();
        let errorMessage = document.getElementById("errorMessage");

        errorMessage.textContent = "";

        if (email === "") {
            errorMessage.textContent = "Email cannot be empty.";
            return;
        }

        if (password === "") {
            errorMessage.textContent = "Password cannot be empty.";
            return;
        }

        let storedUser = localStorage.getItem("user");

        if (!storedUser) {
            errorMessage.textContent = "No account found. Please sign up first.";
            return;
        }

        let userData = JSON.parse(storedUser);

        if (email === userData.email && password === userData.password) {
            alert("Login successful! Redirecting to Dashboard...");
            window.location.href = "http://127.0.0.1:5500/html/product/Home-page.html";
        } else {
            errorMessage.textContent = "Invalid email or password.";
        }
    });
});
