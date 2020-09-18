"use strict";

var clicked = false;
var isShown = false;
function showMenu() {
    var navigation = document.getElementsByTagName("nav");
    if (!clicked) {
        navigation[0].style.display = "block";
        navigation[0].style.textAlign = "right";
        navigation[0].style.float = "right";
        navigation[0].style.padding = "20px";
        navigation[0].style.borderRadius = "3%";
        navigation[0].style.margin = "1%";
        navigation[0].style.backgroundColor = "rgba(1, 1, 1, 0.5)";
        document.getElementById("mobileNav").appendChild(navigation[0]);
        for (let i = 0; i < navigation[0].children.length; i++) {
            navigation[0].children[i].style.display = "block";
        }
        clicked = true;
    }
    if(isShown) {
        navigation[0].style.display = "none";
        isShown = false;
    }
    else {
        navigation[0].style.display = "block";
        isShown = true;
    }
}
function onChangeSelector() {
    var radios = document.getElementsByName("test");
    for (let i = 0; i < radios.length; i++) {
        let selector = "label[for=" + radios[i].id + "]";
        let label = document.querySelector(selector);
        if (radios[i].checked) {
            label.style.backgroundColor = "navajowhite";
            label.style.fontWeight = "bold";
            label.style.color = "rgb(3, 3, 63)";
        }
        else {
            label.style.backgroundColor = "rgb(0, 63, 117)";
            label.style.fontWeight = "normal";
            label.style.color = "white";
        }
    }
}
document.getElementById("burger-menu").addEventListener("click", function() {
    document.getElementById("burger-menu").style.setProperty("display", "block", "important");
    showMenu();
});
