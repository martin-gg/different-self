//validating journey form

"use strict";

function checkName() {
    var name = document.getElementsByName("username-input")[0].value;
    if (name.length === 0) return true;
    if (name.length > 0 && name.length <= 20) {
        for (let i = 0; i < name.length; i++) {
            if (parseInt(name[i])) {
                return false;
            }
        }
        return true;
    }
    return false;
}
function checkEmail() {
    var email = document.getElementsByName("email-input")[0].value;
    if (email.length === 0) return true;
    if (email.length > 0 && email.length <= 30) {
        let firstSpecialCharacterFound = false;
        let secondSpecialCharacterFound = false;
        let countOfAt = 0;
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@' && (i !== 0)) {
                firstSpecialCharacterFound = true;
                countOfAt++;
            }
            if (email[i] === '.') secondSpecialCharacterFound = true;
        }
        if (firstSpecialCharacterFound && secondSpecialCharacterFound && (countOfAt === 1)) return true;
    }
    return false;
}
function checkGender() {
    var gender = document.getElementsByName("gender");
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked === true) return true;
    }
    return false;
}
document.getElementById("form-submit").addEventListener("click", function() {
    if (!checkName() || !checkGender() || !checkEmail()) {
        event.preventDefault();
        document.getElementById("errorMessage").style.display = "block";
    }
    else {
        var name = document.getElementsByName("username-input")[0].value;
        var email = document.getElementsByName("email-input")[0].value;
        var gender = document.getElementsByName("gender");
        var selectedGender;
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) selectedGender = gender[i].value;
        }
        var selection = document.getElementsByTagName("select")[0].value;
        sessionStorage.setItem("inputSet", true);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("gender", selectedGender);
        sessionStorage.setItem("age", selection);
    }
});