// Write your JavaScript code here!

window.addEventListener("load", function() {
    
    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        let coPilotInput = document.querySelector("input[name=copilotName]");
        let coPilot = coPilotInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelLevelInput.value);
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let cargoMass = Number(cargoMassInput.value);

        formSubmission(document, list, pilot, coPilot, fuelLevel, cargoMass);
    })


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
        let selectedPlanet = pickPlanet(listedPlanets);
        
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
       //console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });
});

/* 
First, do as the comments in the code tell you and set listedPlanetsResponse equal to the value returned when calling myFetch(). This value is going to be a promise. If we head to our browser and open up our developer tools, we can now see a list of the planets. Then using pickPlanet() and addDestinationInfo(), select a planet at random from listedPlanets and pass that information to addDestinationInfo(). Reload your page and check out your site to see the mission target information.


*/