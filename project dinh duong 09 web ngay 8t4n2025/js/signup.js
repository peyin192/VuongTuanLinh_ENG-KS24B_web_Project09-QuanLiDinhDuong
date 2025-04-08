document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupButton").addEventListener("click", function (event) {
        event.preventDefault();

        let email = document.getElementById("emailSignup").value.trim();
        let username = document.getElementById("userNameSignup").value.trim();
        let password = document.getElementById("passwordSignup").value.trim();
        let errorMessage = document.getElementById("errorMessage");

        errorMessage.textContent = "";

        // Kiểm tra email hợp lệ
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errorMessage.textContent = "Email cannot be empty.";
            return;
        } else if (!emailRegex.test(email)) {
            errorMessage.textContent = "Invalid email format.";
            return;
        }

        // Kiểm tra username
        if (username === "") {
            errorMessage.textContent = "Username cannot be empty.";
            return;
        }

        // Kiểm tra mật khẩu
        if (password === "") {
            errorMessage.textContent = "Password cannot be empty.";
            return;
        } else if (password.length < 8) {
            errorMessage.textContent = "Password must be at least 8 characters.";
            return;
        }

        // Lưu thông tin vào localStorage
        let userData = {
            email: email,
            username: username,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(userData));

        alert("Sign up successful! Redirecting to login page...");
        window.location.href = "signin.html";
    });
});
