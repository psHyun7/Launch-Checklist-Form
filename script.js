// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

// Event listener for window on LOAD
window.addEventListener("load", function() {
   // grab JSON file and process it
   let missionTarget = document.getElementById("missionTarget");
   const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json");
   fetchPromise.then(function(response) {
      response.json().then(function(json) {
         let i = Math.floor(Math.random() * json.length)
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[i].name}</li>
            <li>Diameter: ${json[i].diameter}</li>
            <li>Star: ${json[i].star}</li>
            <li>Distance from Earth: ${json[i].distance}</li>
            <li>Number of Moons: ${json[i].moons}</li>
         </ol>
         <img src="${json[i].image}">
         `
      });
   });
   let letsLaunch = false;
   // submission button
   let submitButton = document.getElementById("formSubmit");
   // event listener for submission button
   submitButton.addEventListener("click", function(event) {
      // DOM objects for form field
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      // validation check on required fields
      if (!pilotName.value || !copilotName.value || !fuelLevel.value || !cargoMass.value) {
         alert("All fields are required!")
         event.preventDefault();
      } else if (!isNaN(parseInt(pilotName.value)) || !isNaN(parseInt(copilotName.value)) || isNaN(parseInt(fuelLevel.value)) || isNaN(parseInt(cargoMass.value))) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      } else {
         letsLaunch = true;
      }

      //DOM objects for launchStatusCheck fields
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      let faultyItemList = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");

      // change faultyItems accordingly
      if (letsLaunch) {
         let error = false;
         // check for fuel level
         if (parseInt(fuelLevel.value) < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            error = true;
         } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
         }
         // check for cargo mass
         if (parseInt(cargoMass.value) > 10000) {
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            error = true;
         } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
         }
         // launch ready or canceled
         if (error) {
            faultyItemList.style.visibility = "visible";
            launchStatus.style.color = "red"
            launchStatus.innerHTML = "Shuttle not ready for launch";
         } else {
            faultyItemList.style.visibility = "hidden";
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle ready for launch";
            alert("3, 2, 1, BLAST OFF!")
         }
      }
      
      // last preventDefault to stop sending form to server (temporarily as there is no destination path)
      event.preventDefault();
   });
});
