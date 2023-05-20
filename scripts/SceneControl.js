// Create the direction choice buttons

import { DarkForest } from "./DarkForest.js"
import { Home } from "./Home.js"
import { MotherGoat } from "./MotherGoat.js"
import { ShepherdBoy } from "./Plains.js"
import { WitchHouse } from "./WitchHouse.js"
import { Store } from "./Store.js"
import { Start } from "./Start.js"
import { Start2 } from "./Start2.js"
import { Village } from "./Village.js"
import { Alraune } from "./Alraune.js"
import { BadWolf } from "./BadWolf.js"
import { PickFlowers } from "./PickFlowers.js"
import { Allergic } from "./Allergic.js"
import { BlueFlowers } from "./BlueFlowers.js"
import { Grandma } from "./Grandma.js"
import { RunAway } from "./RunAway.js"
import { Start3 } from "./Start3.js"
import { Parents } from "./Parents.js"
import { openInventory } from "./Inventory.js"


let currentScene = "initial" // Initial scene

document.addEventListener("northClick", () => {
  switch (currentScene) {
    case "initial":
      DarkForest()
      currentScene = "scene1"
      break;
    case "scene1":
      Alraune()
      break;
    case "scene5":
      BadWolf()
      currentScene = "scene6"
      break;
    case "scene6":
      PickFlowers()
      currentScene = "scene7"
      break;
    case "scene7":
      BlueFlowers()
      currentScene = "scene8"
      break;
    case "scene8":
      Grandma()
      break;
    // Handle other cases as needed
  }
})

document.addEventListener("eastClick", () => {
  switch (currentScene) {
    case "initial":
      ShepherdBoy()
      currentScene = "scene2"
      break;
    case "scene1":
      WitchHouse()
      break;
    case "scene5":
      Start2()
      currentScene = "initial"
      break;
    case "scene7":
      Alraune()
      break;
    case "scene9":
      Start3()
      currentScene = "scene10"
      break;
    // Handle other cases as needed
  }
})

document.addEventListener("southClick", () => {
  switch (currentScene) {
    case "initial":
      Home()
      break;
    case "scene1":
      Start2()
      currentScene = "initial"
      break;
    case "scene2":
      Village()
      break;
    case "scene5":
      Store()
      break;
    case "scene6":
      RunAway()
      currentScene = "scene9"
      break;
    case "scene10":
      Parents()
      break;
    // Handle other cases as needed
  }
})

document.addEventListener("westClick", () => {
  switch (currentScene) {
    case "initial":
      currentScene = "scene5"
      MotherGoat()
      break;
    case "scene2":
      Start2()
      currentScene = "initial"
      break;
    case "scene7":
      Allergic()
      break;
    // Handle other cases as needed
  }
})

document.addEventListener("resetClick", () => {
      Start()
      currentScene = "initial"
})

document.addEventListener("warningClick", () => {
window.alert("I'm not going back there")
})

document.addEventListener("inventoryClick", () => {
  openInventory()
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
