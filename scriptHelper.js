// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let markup = `   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="https://handlers.education.launchcode.org/static/planets.json">`;

    document.body.innerHTML = markup;
}


function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === "")
    {
        return "Empty";
    }
    else if (isNaN(numberInput))
    {
        return "Not a Number";
    }
    else if (isNaN(numberInput) === false)
    {
        return "Is a Number";
    }
 }


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuel = document.getElementById("fuelStatus");
    let cargo = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        pilotStatus.innerHTML = `Pilot ${pilot} is needed`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is needed`
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Make sure to enter valid info for each field!");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    };

    let launchStatus = document.getElementById("launchStatus");
    if (fuelLevel < 10000 && cargoMass <= 10000) {
        list.style.visibility = "visible";
        fuel.innerHTML = "Fuel level too low for launch";
        cargo.innerHTML = "Cargo mass low enough for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "#ff0000";
    } else if (fuelLevel >= 10000 && cargoMass > 10000) {
        list.style.visibility = "visible";
        fuel.innerHTML = "Fuel level fine for launch";
        cargo.innerHTML = "There is too much mass for the shuttle to take off";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "#ff0000";
    } else if (fuelLevel >= 10000 && cargoMass <= 10000) {
        fuel.innerHTML = "Fuel level fine for launch";
        cargo.innerHTML = "Cargo mass low enough for launch";
        launchStatus.innerHTML = "Shuttle is ready for Launch";
        launchStatus.style.color = "#008000"
    };
};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
};

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return randomPlanet;
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

