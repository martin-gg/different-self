"use strict";

var counter = 0;
var endCounter = 0;

function convertToChar(inp) {
    if (inp === 0) return "e";
    else if (inp === 1) return "f";
    else if (inp === 2) return "p";
    else if (inp === 3) return "s";
    else if (inp === 4) return "i";
    else if (inp === 5) return "t";
    else if (inp === 6) return "j";
    else if (inp === 7) return "n";
}
function deleteContent() {
    while (document.getElementById("test-container").firstChild) {
        document.getElementById("test-container").removeChild(document.getElementById("test-container").firstChild);
    }
}
function getType() {
    var type = "";
    if (results.get("e") >= results.get("i")) type += "e";
    else type += "i";
    if (results.get("n") >= results.get("s")) type += "n";
    else type += "s";
    if (results.get("f") >= results.get("t")) type += "f";
    else type += "t";
    if (results.get("p") >= results.get("j")) type += "p";
    else type += "j";
    return type;
}
function createContent() {
    var testResults = document.createElement("h1");
    var type = getType();
    var creation = new Type();
    creation.updateType(type);
    //console.log(creation.type);
    testResults.innerText = "Your type: " + type;
    document.getElementById("test-container").appendChild(testResults);
    var fullName = document.createElement("h3");
    fullName.innerText = creation.type["fullName"];
    var careerMessage = document.createElement("h4");
    var careers = document.createElement("ul");
    while (creation.type["careers"].length > 0) {
        var item = document.createElement("li");
        item.innerText = creation.type["careers"].pop();
        careers.appendChild(item);
    }
    careerMessage.innerText = "Suitable careers:";
    var shortDescription = document.createElement("p");
    shortDescription.style.textAlign = "justify";
    shortDescription.innerText = creation.type["summary"];
    var mainPage = document.createElement("a");
    mainPage.innerText = "Main Page";
    mainPage.href = "index.html";
    document.getElementById("test-container").appendChild(fullName);
    document.getElementById("test-container").appendChild(careerMessage);
    document.getElementById("test-container").appendChild(careers);
    document.getElementById("test-container").appendChild(shortDescription);
    document.getElementById("test-container").appendChild(mainPage);
}
document.addEventListener("DOMContentLoaded", function(){
    if (sessionStorage.getItem("inputSet")) {
        //console.log("life eternal");
        var greetingMessage = document.createElement("h1");
        var textMessage = document.createElement("p");
        var color = document.createElement("input");
        var btnNext = document.createElement("button");
        btnNext.id = "begin";
        btnNext.innerText = "Start Test";
        color.type = "color";
        greetingMessage.innerText = "Greetings";
        textMessage.innerText = "Your taste is very important to us. For your comfortable usage, please select your favourite color, so we can tweak the environment for you.";
        if (sessionStorage.getItem("name")) {
            greetingMessage.innerText += ", " + sessionStorage.getItem("name");
        }
        document.getElementById("test-container").appendChild(greetingMessage);
        document.getElementById("test-container").appendChild(textMessage);
        document.getElementById("test-container").appendChild(color);
        document.getElementById("test-container").appendChild(document.createElement("br"));
        document.getElementById("test-container").appendChild(btnNext);
        document.getElementById("begin").addEventListener("click", function(){
            
            document.getElementById("the-div").style.background = "";
            document.getElementById("the-div").style.backgroundColor = color.value;
            document.getElementById("the-div").style.color = getTextColor(color.value);
            while (document.getElementById("test-container").firstChild) {
                document.getElementById("test-container").removeChild(document.getElementById("test-container").firstChild);
            }
            var test = new Test();
            var question = document.createElement("h1");
            question.innerText = test.getQuestion(counter);
            var inCycle = false;
            var left = document.createElement("small");
            left.innerText = "I disagree";
            left.style.float = "left";
            var right = document.createElement("small");
            right.innerText = "I agree";
            right.style.float = "right";
            var limitContainer = document.createElement("div");
            limitContainer.width = "450px";
            limitContainer.appendChild(left);
            limitContainer.appendChild(right);
            var input = document.createElement("input");
            input.id = "ranger";
            input.type = "range";
            input.min = "0";
            input.max = "3";
            input.style.width = "40vw";
            var btn = document.createElement("button");
            btn.id = "test-next";
            btn.innerText = "Next";
            document.getElementById("test-container").appendChild(question);
            document.getElementById("test-container").appendChild(limitContainer);
            document.getElementById("test-container").appendChild(input);
            document.getElementById("test-container").appendChild(btn);
            document.getElementById("test-next").addEventListener("click", function() {
                let x = results.get(convertToChar(counter));
                x += parseInt(document.getElementById("ranger").value);
                results.set(convertToChar(counter), x);
                if (test.testFinished()) {
                    deleteContent();
                    createContent();
                    return;
                }
                counter++;
                if (counter >= 7) {
                    counter = 0;
                }
                while (test.isEmpty(counter)) {
                    counter++;
                }
                question.innerText = test.getQuestion(counter);
                //console.log(counter);
                //console.log(results);
                //console.log(test);
            });
        });
    }
    else {
        document.getElementById("error-container").style.display = "block";
    }
});

