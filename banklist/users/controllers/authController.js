import Auth from "../models/authModel";

const auth = new Auth();
const registerUser = function () {
    const signUpForm = document.getElementById("signup-form");
    if (signUpForm) {
        signUpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMessage = document.querySelector(".error-message");
            const confirmPassword = document
                .getElementById("confirm-password")
                .value.trim();
            // Confirm password check
            if (password !== confirmPassword) {
                errorMessage.textContent = "Passwords must match!";
                return;
            } // Proceed to register
            const success = auth.register({ email, password });

            if (success) {
                alert("Registered successfully!!!");
                signUpForm.reset();
            }

            console.log(`${email}:${password}`);

            if (success) {
                errorMessage.style.display = "none";
                alert("registered successfully!!!");
            }
        });
    }
};

export { registerUser };
