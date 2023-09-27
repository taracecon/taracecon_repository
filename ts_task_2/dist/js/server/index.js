"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const SpaceXRocket_1 = require("../core/SpaceXRocket");
const NasaRocket_1 = require("../core/NasaRocket");
const MilitaryRocket_1 = require("../core/MilitaryRocket");
// new class, created for adding new rockets
const CustomRocket_1 = require("../core/CustomRocket");
const app = express();
// Use process.env.PORT if available, otherwise, use port 2004
const port = process.env.PORT || 2004;
// IP address template
const ip = '192.168.0.113';
// dictionary for storing rockets and for for O(1) search
let rockets_dict = {};
// create and add rockets to new dictionary
let spacex_obj = new SpaceXRocket_1.SpaceXRocket();
let nasa_obj = new NasaRocket_1.NasaRocket();
let military_obj = new MilitaryRocket_1.MilitaryRocket();
rockets_dict[spacex_obj.name.toLowerCase()] = spacex_obj;
rockets_dict[nasa_obj.name.toLowerCase()] = nasa_obj;
rockets_dict[military_obj.name.toLowerCase()] = military_obj;
////////////////////////////////////// GET ////////////////////////////////////
app.get('/list', (req, res) => {
    let names_list = [];
    for (const key in rockets_dict) {
        names_list.push(rockets_dict[key].name);
    }
    res.send(names_list.sort());
    console.log(`List of rocket names sorted A-Z is sent`);
});
// the path '/names/:rocket_name' chosen instead of '/:rocket_name' 
// for avoiding collision with '/list' (previous app.get)
app.get('/names/:rocket_name', (req, res) => {
    const rocket_name_lower = req.params.rocket_name.toLowerCase();
    console.log(`Checking rocket name on server...`);
    // Searching key in dictionary O(1)
    let obj_by_key = rockets_dict[rocket_name_lower];
    if (obj_by_key) {
        console.log(`Found rocket on server. Its info can be viewed`);
        res.send({
            date: new Date().toISOString(),
            name: obj_by_key.name
        });
    }
    else if (rocket_name_lower == "list") {
        console.log(`Bad request error. Rocket name cannot be 'list'`);
        res.sendStatus(400);
    }
    else {
        console.log(`Rocket name Not found`);
        res.sendStatus(404);
    }
    ;
});
////////////////////////////////////// POST ///////////////////////////////////
// Middleware to parse JSON in the request body
app.use(express.json());
app.post('/add', (req, res) => {
    const json_data = req.body;
    console.log(`Json data received in body`);
    let new_rocket_name = json_data.name;
    if (!new_rocket_name) {
        throw new Error(`New rocket name is not specified in the request body`);
    }
    if (new_rocket_name == '') {
        throw new Error(`New rocket name cannot be empty`);
    }
    let new_rocket_name_lower = new_rocket_name.toLowerCase();
    // If rocket already exists or name is “list”
    // then send 409 HTTP code with empty body
    if (rockets_dict[new_rocket_name_lower] || new_rocket_name_lower == 'list') {
        console.log(`Conflict. Rocket cannot be added because \
                    its name is 'list' or it already exists`);
        res.sendStatus(409);
    }
    // else add new rocket
    else {
        rockets_dict[new_rocket_name_lower] = new CustomRocket_1.CustomRocket(new_rocket_name);
        console.log(`Rockets' dictionary updated successfully`);
        res.sendStatus(200);
    }
});
///////////////////////////////// Middleware ////////////////////////////
// display server info
app.listen(port, () => {
    console.log(`Express server is running at http://${ip}:${port}`);
});
// error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ errorMsg: `A server error occurred: ` + err.message });
});
// middleware for handling 404 errors (any other request should return 404)
app.use((req, res) => {
    res.status(404).json({ errorMsg: `Not Found` });
});
