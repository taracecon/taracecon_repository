"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarPort = void 0;
var SpaceXRocket_1 = require("./SpaceXRocket");
var NasaRocket_1 = require("./NasaRocket");
var MilitaryRocket_1 = require("./MilitaryRocket");
var StarPort = /** @class */ (function () {
    function StarPort() {
    }
    StarPort.prototype.getAllRockets = function () {
        var arr = [new SpaceXRocket_1.SpaceXRocket(),
            new NasaRocket_1.NasaRocket(),
            new SpaceXRocket_1.SpaceXRocket(),
            new MilitaryRocket_1.MilitaryRocket(),
            new SpaceXRocket_1.SpaceXRocket(),
            new MilitaryRocket_1.MilitaryRocket(),
            new NasaRocket_1.NasaRocket(),
            new NasaRocket_1.NasaRocket(),
            new MilitaryRocket_1.MilitaryRocket(),
            new SpaceXRocket_1.SpaceXRocket()];
        return arr;
    };
    return StarPort;
}());
exports.StarPort = StarPort;
