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