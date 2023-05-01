// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

import { rps, rpsls } from './rpsls.js';

let usrMode = null;
let usrInput = null;

document.querySelector(".play").addEventListener("click", () => {
    const rpsChecked = document.querySelector("#rps").checked;
    const rpslsChecked = document.querySelector("#rpsls").checked;
    const opponentChecked = document.querySelector("#opponent").checked;

    if (rpsCHecked) {
        usrMode = "rps";
    } else if (rpslsChecked) {
        usrMode = "rpsls";
    }

    if (opponentChecked) {
        document.querySelector(".inputs").style.display = "block";
    } else {
        
    }
})