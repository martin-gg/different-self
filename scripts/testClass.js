"use strict";

var results = new Map();
results.set("i", 0);
results.set("e", 0);
results.set("n", 0);
results.set("s", 0);
results.set("f", 0);
results.set("t", 0);
results.set("p", 0);
results.set("j", 0);

class Test {
    constructor() {
        var req = new XMLHttpRequest();
        req.open('GET', 'https://api.myjson.com/bins/1d578u', false);
        req.send(null);
        var testObject = JSON.parse(req.responseText);
        this.test = Object.values(testObject);
    }
    getQuestion(index) {
        return this.test[index].pop();
    }
    isEmpty(index) {
        if (this.test[index].length === 0) return true;
        return false;
    }
    testFinished() {
        for (let i = 0; i < 8; i++) {
            if (!this.isEmpty(i)) {
                return false;
            }
        }
        return true;
    }
};