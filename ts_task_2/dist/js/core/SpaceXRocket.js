"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceXRocket = void 0;
const RocketBase_1 = require("./RocketBase");
class SpaceXRocket extends RocketBase_1.RocketBase {
    constructor() {
        super(...arguments);
        this.name = "SpaceX";
    }
}
exports.SpaceXRocket = SpaceXRocket;
