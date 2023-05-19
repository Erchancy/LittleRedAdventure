import { EastButton, NorthButton, ResetButton, SouthButton, WestButton } from "./SceneControl.js"

export const RunAway = () => {

    const descriptionHTML = `
    <div class="description">You decide, quite reasonably you think, to go home
    Grandma may needs this medicine and food but she'll live a day without won't she?
    And coming to think of it, why did your parents send you to go through the woods all alone?
    This isn't the type of thig a child should be doing.
    Making your way out of the forest, you can see the birdge again
    Mamma goat is nowhere to be seen
    Made her way to the store you hope</div>
    `

    const northButton = NorthButton("North")
    const eastButton = EastButton("East")
    const southButton = SouthButton("South")
    const westButton = WestButton("West")
    const resetButton = ResetButton()
        
    const Buttons = `<div class="button-container">
    <div>${northButton}</div>
    <div class="button-center">${eastButton}${resetButton}<div class="hidden-button">${westButton}</div></div>
    <div class="hidden-button">${southButton}</div></div>`
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">So...which way would you like to go?</div>
    ${Buttons}
    `
    
        container.innerHTML = composedHTML


    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}