"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NasaRocket = void 0;
const RocketBase_1 = require("./RocketBase");
class NasaRocket extends RocketBase_1.RocketBase {
    constructor() {
        super(...arguments);
        this.name = "NASA";
    }
}
exports.NasaRocket = NasaRocket;
