"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StarPort_1 = require("./StarPort");
var sp = new StarPort_1.StarPort();
var ar = sp.getAllRockets();
for (var i = 0; i < ar.length; i++) {
    console.log("Prepare to the next launch", i);
    ar[i].launch();
}
