/* ----------------------------------------------
SIGN-UP FORM TOGGLE BUTTON
- 
------------------------------------------------- */
const signUpButton = document.querySelector(".sign-up");
const signUpForm = document.querySelector(".sign-up-form");

signUpButton.addEventListener("click", () => {
    if(signUpForm.style.display === "none") {
        signUpForm.style.display = "block";
    } else {
        signUpForm.style.display = "none";
    }
});