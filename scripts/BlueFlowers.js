import { EastButton, NorthButton, ResetButton, SouthButton, WestButton } from "./SceneControl.js"

export const BlueFlowers = () => {

    const descriptionHTML = `
    <div class="description">Blue flowers were definitely her favorite!
    With renewed confidence you stride forward
    You pick a lovely bouquet of blue flowers
    Now, to resume your journey
    ...
    Uh oh
    You got so caught up in picking the flowers that you've gotten lost
    Maybe you can remember which way to grandma's
    Peering around you can make out the vague outline of a two story cabin to your left
    To your right what appears to be a house
    And to your north a lone cabin</div>
    `

    const northButton = NorthButton("North")
    const eastButton = EastButton("Coming Soon")
    const southButton = SouthButton("South")
    const westButton = WestButton("Coming Soon")
    const resetButton = ResetButton()
        
    const Buttons = `<div class="button-container">
    <div>${northButton}</div>
    <div class="button-center">${eastButton}${resetButton}${westButton}</div></div>
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