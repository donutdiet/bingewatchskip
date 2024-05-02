/* ----------------------------------------------
SIGN-UP FORM TOGGLE BUTTON
- setting display: none returns an empty string when trying to access the style for the first time idk why
------------------------------------------------- */
const signUpButton = document.querySelector(".sign-up");
const signUpForm = document.querySelector(".sign-up-form");

signUpButton.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(signUpForm);
    if(computedStyle.display === "none") {
        signUpForm.style.display = "flex";
    } else {
        signUpForm.style.display = "none";
    }
});