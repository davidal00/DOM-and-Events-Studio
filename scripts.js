// Write your JavaScript code here.
// Remember to pay attention to page loading!

//lets the programmer know the window loaded
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
});

// let button = null;
// let paragraph = null;
// let missionAbort = null;
// let landing = null;
// let upButton = null;
// let downButton = null;
// let leftButton = null;
// let rightButton = null;


function init () {
  missionAbort = document.getElementById("abortMission");
  button = document.getElementById("takeoff");
  paragraph = document.querySelector("p");
  landing = document.getElementById("landing");
  upButton = document.getElementById("upButton");
  downButton = document.getElementById("downButton");
  leftButton = document.getElementById("leftButton");
  rightButton = document.getElementById("rightButton");

  let rocket = document.getElementById('rocket');

  button.addEventListener("click", function (event) {
  let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirm == true){
      paragraph.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML = 10000;
    } else {
      console.log("Not ready for takeoff!");
    }
}); 

landing.addEventListener("click", function (event) {
        alert("The shuttle is landing. Landing gear engaged.");
        paragraph.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
  }); 
  
  missionAbort.addEventListener("click", function (event) {
    let confirm = window.confirm("Confirm that you want to abort the mission.");
    if (confirm == true){
      paragraph.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = 0;
    } else {
      console.log("Mission not aborted!");
    }
  });

rocket.style.left = "154px";
rocket.style.bottom = "0px";

  upButton.addEventListener("click", function (event) {
    paragraph.innerHTML = "move up 10px";
    let distanceFromBottom = parseInt(rocket.style.bottom);
    distanceFromBottom += 10;
    rocket.style.bottom = distanceFromBottom + "px";
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
  });

  downButton.addEventListener("click", function (event) {
    paragraph.innerHTML = "move down 10px";
    let distanceFromBottom = parseInt(rocket.style.bottom);
    distanceFromBottom -= 10;
    rocket.style.bottom = distanceFromBottom + "px";
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
  });

  leftButton.addEventListener("click", function (event) {
    paragraph.innerHTML = "move left 10px";
    let distanceFromLeft = parseInt(rocket.style.left);
    distanceFromLeft -= 10;
    rocket.style.left = distanceFromLeft + "px";
  });

  rightButton.addEventListener("click", function (event) {
    paragraph.innerHTML = "move right 10px";
    let distanceFromLeft = parseInt(rocket.style.left);
    distanceFromLeft += 10;
    rocket.style.left = distanceFromLeft + "px";
  });
}

window.onload = init;