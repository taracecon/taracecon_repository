"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketBase = void 0;
var RocketBase = /** @class */ (function () {
    function RocketBase() {
    }
    RocketBase.prototype.launch = function () {
        console.log("The", this.name, "launched at", Date.now());
    };
    return RocketBase;
}());
exports.RocketBase = RocketBase;
