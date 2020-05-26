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
window.addEventListener("load", function() {
   let submitButton = document.getElementById("formSubmit");
   submitButton.addEventListener("click", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      console.log(pilotName)
      console.log(pilotName.value)
      if (!pilotName.value || !copilotName.value || !fuelLevel.value || !cargoMass.value) {
         alert("Make sure to enter valid information for each field!")
         event.preventDefault();
      }

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      let faultyItemList = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");

      if (parseInt(fuelLevel.value) < 10000) {
        faultyItemList.style.visibility = "visible";
        fuelStatus.innerHTML = "There is not enough fuel for the journey";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
      }
      if (parseInt(cargoMass.value) > 10000) {
        faltyItemList.style.visibility = "visible";
        cargoStatus.innerHTML = "There is too much mass for shuttle to lift off";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
      }

      launchStatus.style.color = "green";
      launchStatus.innerHTML = "Shuttle ready for launch";

   });
});
