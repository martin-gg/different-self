"use strict";

//validating contact form
function checkName() {
    var name = document.getElementsByName("username-input")[0].value;
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
            if (email[i] === '@') {
                firstSpecialCharacterFound = true;
                countOfAt++;
            }
            if (email[i] === '.') secondSpecialCharacterFound = true;
        }
        if (firstSpecialCharacterFound && secondSpecialCharacterFound && (countOfAt === 1)) return true;
    }
    return false;
}
function checkMessage() {
    var message = document.getElementsByTagName("textarea")[0].value;
    if (message.length > 5 && message.length < 300) {
        return true;
    }
    return false;
}
document.getElementById("form-submit").addEventListener("click", function() {
    if (!checkName() || !checkEmail() || !checkMessage()) {
        event.preventDefault();
        document.getElementById("errorMessage").style.display = "block";
    }
    
});