"use strict";
var convertor = {
    "a" : 10,
    "b" : 11,
    "c" : 12,
    "d" : 13,
    "e" : 14,
    "f" : 15
};
function getTextColor(color) {
    var sum = 0;
    for (let i = 1; i < color.length; i++) {
        if (parseInt(color[i])) {
            sum += parseInt(color[i]);
        }
        else {
            sum += convertor[color[i]];
        }
    }
    if (sum >= 54) {
        return "black";
    }
    else {
        return "white";
    }
}