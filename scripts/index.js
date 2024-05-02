/* ----------------------------------------------
SIGN-UP FORM TOGGLE BUTTON
- setting display: none returns an empty string 
when trying to access the style for the first 
time idk why
------------------------------------------------- */
const signUpButton = document.querySelector(".sign-up");
const signUpForm = document.querySelector(".sign-up-form");
const submitFormButton = document.querySelector(".sign-up-submit");

signUpButton.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(signUpForm);
    if(computedStyle.display === "none") {
        signUpForm.style.display = "flex";
    } else {
        signUpForm.style.display = "none";
    }
});

/* ----------------------------------------------
SIGN-UP FORM PASSWORD CONFIRMATION
- used setCustomValidity() and reportValidity()
but not 100% sure how they actually work
------------------------------------------------- */

const confirmPassword = document.querySelector("#confirm-password-input");

// Updates whether the two passwords match as the user types
confirmPassword.addEventListener("keyup", () => {
    if(!isMatchingPassword()) {
        confirmPassword.setCustomValidity("Invalid: passwords do not match.");
    } else {
        confirmPassword.setCustomValidity("");
    }
    confirmPassword.reportValidity();
});

// Confirm matching passwords at form submission
submitFormButton.addEventListener("click", (event) => {
    if(!isMatchingPassword()) {
        const errorMessage = document.querySelector(".error-message");
        errorMessage.textContent = "Passwords do not match"
        event.preventDefault();
    }
})

// Check whether the two passwords are matching
function isMatchingPassword() {
    const password1 = document.querySelector("#password-input").value;
    const password2 = document.querySelector("#confirm-password-input").value;
    console.log(password1, password2);
    return password1 === password2;
}