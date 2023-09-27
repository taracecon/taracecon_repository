"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StarPort_1 = require("./StarPort");
let sp = new StarPort_1.StarPort();
let ar = sp.getAllRockets();
for (var i = 0; i < ar.length; i++) {
    console.log("Prepare to the next launch", i);
    ar[i].launch();
}
