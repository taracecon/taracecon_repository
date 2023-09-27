"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRocket = void 0;
const RocketBase_1 = require("./RocketBase");
class CustomRocket extends RocketBase_1.RocketBase {
    constructor(name) {
        super();
        this.name = name;
    }
}
exports.CustomRocket = CustomRocket;
