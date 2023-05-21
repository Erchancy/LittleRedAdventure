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
import { closeInventory, openInventory } from "./inventory/Inventory.js"

// Moving all this stuff to its own module breaks the event listeners for some reason. Investigate and fix
const navigationButtons = (label) => {
  const labelId = label.toLowerCase()
  let buttonDiv = ""
  switch (labelId) {
    case "north":
      buttonDiv += `<div id='top' class="button-top">`
    break;
    case "east":
      buttonDiv += `<div class="button-center">`
    break;
    case "south":
      buttonDiv += `<div id='bottom'>`
    break;
  }
  buttonDiv += `<div><button id='${labelId}' class="button">${label}</button></div>`
  switch (labelId) {
    case "inventory":
      buttonDiv += `</div>`
    break;
    case "west":
      buttonDiv += `</div>`
    break;
    case "south":
      buttonDiv += `</div>`
    break;
  }
  return buttonDiv
}

const buttonLabelArray = [
  {
    text: "North"
  },
  {
    text: "Inventory"
  },
  {
    text: "East"
  },
  {
    text: "Reset"
  },
  {
    text: "West"
  },
  {
    text: "South"
  }
]

export const buttonLabelAssignment = () => {
  let buttonsHTML = `<div class="button-container">`
  for (const buttonLabel of buttonLabelArray) {
    buttonsHTML += navigationButtons(buttonLabel.text)
  }
  buttonsHTML += `</div>`
  return buttonsHTML
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
    case "reset":
      customEvent = new CustomEvent("resetClick")
      document.dispatchEvent(customEvent)
      break;
    case "inventory":
      customEvent = new CustomEvent("inventoryClick")
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
  const inventoryButton = document.getElementById("overlay")
  if (inventoryButton.classList.contains("open")) {
    closeInventory()
  } else {
    openInventory()
  }
  })

