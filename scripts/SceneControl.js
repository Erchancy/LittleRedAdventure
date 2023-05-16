// Create the direction choice buttons

import { DarkForest } from "./DarkForest.js"
import { Home } from "./Home.js"
import { MotherGoat } from "./MotherGoat.js"
import { ShepherdBoy } from "./ShepherdBoy.js"
import { WitchHouse } from "./WitchHouse.js"
import { Store } from "./Store.js"

export const NorthButton = () => {
  return `<div><button id='north'>North</button></div>`
}

export const EastButton = () => {
  return `<div><button id='east'>East</button></div>`
}

export const SouthButton = () => {
  return `<div><button id='south'>South</button></div>`
}

export const WestButton = () => {
  return `<div><button id='west'>West</button></div>`
}

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target
  let customEvent

  switch (itemClicked.id) {
    case "north":
      customEvent = new CustomEvent("northClick")
      document.dispatchEvent(customEvent)
      break;
    case "east":
      customEvent = new CustomEvent("eastClick")
      document.dispatchEvent(customEvent)
      break;
    case "south":
      customEvent = new CustomEvent("southClick")
      document.dispatchEvent(customEvent)
      break;
    case "west":
      customEvent = new CustomEvent("westClick")
      document.dispatchEvent(customEvent)
      break;
  }
})


let currentScene = "initial" // Initial scene

document.addEventListener("northClick", () => {
  switch (currentScene) {
    case "initial":
      DarkForest()
      currentScene = "scene1"
      break
    case "scene1":
      // Transition logic from scene1 to scene2
      break
    // Handle other cases as needed
  }
})

document.addEventListener("eastClick", () => {
  switch (currentScene) {
    case "initial":
      ShepherdBoy()
      currentScene = "scene3"
      break;
    case "scene1":
      WitchHouse()
      break;
    // Handle other cases as needed
  }
})

document.addEventListener("southClick", () => {
  switch (currentScene) {
    case "initial":
      Home()
      currentScene = "scene4"
      break;
    case "scene5":
      Store()
      break;
    // Handle other cases as needed
  }
})

document.addEventListener("westClick", () => {
  switch (currentScene) {
    case "initial":
      MotherGoat()
      currentScene = "scene5"
      break
    // Handle other cases as needed
  }
})



/*
const counter = {
    north: 0,
    east: 0,
    south: 0,
    west: 0
};

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    switch (itemClicked.id) {
        case "north":
            counter.north++;
            if (counter.north === 1 && counter.east === 0 && counter.south === 0 && counter.west === 0) {
                DarkForest();
            }
            break;
        case "east":
            counter.east++;
            if (counter.north === 0 && counter.east === 1 && counter.south === 0 && counter.west === 0) {
                ShepherdBoy();
            } else if (counter.north === 1 && counter.east === 1 && counter.south === 0 && counter.west === 0) {
                WitchHouse();
            }
            break;
        case "south":
            counter.south++;
            if (counter.north === 0 && counter.east === 0 && counter.south === 1 && counter.west === 0) {
                Home();
            }
            break;
        case "west":
            counter.west++;
            if (counter.north === 0 && counter.east === 0 && counter.south === 0 && counter.west === 1) {
                MotherGoat();
            }
            break;
        default:
            // Handle other button clicks if needed
            break;
    }
});
*/
