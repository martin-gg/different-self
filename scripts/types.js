"use strict";

class Type {
    constructor() {
        var req = new XMLHttpRequest();
        req.open('GET', 'https://api.myjson.com/bins/10q5vq', false);
        req.send(null);
        var typeObject = JSON.parse(req.responseText);
        this.type = typeObject;
    }
    updateType(result) {
        this.type = this.type[result];
    }
};