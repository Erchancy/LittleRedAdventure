import { EastButton, NorthButton, ResetButton, SouthButton, WestButton } from "./SceneControl.js"

export const Home = () => {

    const descriptionHTML = `
    <div class="description">Honestly who cares about grandma.
    You do a little twirl on one foot and head back the way you came.
    A chill runs down your spine, like somehow you've done something big.
    Perhaps even life-changing...
    Surely not, you think.
    Surely not
    <div class="choose">BAD END</div></div>
    `

    const northButton = NorthButton("North")
    const eastButton = EastButton("East")
    const southButton = SouthButton("South")
    const westButton = WestButton("West")
    const resetButton = ResetButton()

    const Buttons = `<div class="button-container">
    <div id='north' class="hidden-button">${northButton}</div>
    <div class="button-center hidden-button">${eastButton}</div>${resetButton}<div class="hidden-button">${westButton}</div></div>
    <div id='south'class="hidden-button">${southButton}</div></div>`


    const composedHTML = `
        ${descriptionHTML}${Buttons}
        `
    
        container.innerHTML = composedHTML

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}