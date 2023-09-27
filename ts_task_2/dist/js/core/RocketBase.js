"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketBase = void 0;
class RocketBase {
    launch() {
        console.log("The", this.name, "launched at", new Date().toISOString());
    }
}
exports.RocketBase = RocketBase;
