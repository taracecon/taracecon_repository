"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarPort = void 0;
const SpaceXRocket_1 = require("./SpaceXRocket");
const NasaRocket_1 = require("./NasaRocket");
const MilitaryRocket_1 = require("./MilitaryRocket");
class StarPort {
    getAllRockets() {
        let arr = [new SpaceXRocket_1.SpaceXRocket(),
            new NasaRocket_1.NasaRocket(),
            new MilitaryRocket_1.MilitaryRocket(),
            new MilitaryRocket_1.MilitaryRocket(),
            new SpaceXRocket_1.SpaceXRocket(),
            new MilitaryRocket_1.MilitaryRocket(),
            new NasaRocket_1.NasaRocket(),
            new NasaRocket_1.NasaRocket(),
            new MilitaryRocket_1.MilitaryRocket(),
            new SpaceXRocket_1.SpaceXRocket()];
        return arr;
    }
}
exports.StarPort = StarPort;
