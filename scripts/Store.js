import { EastButton, NorthButton, SouthButton, WestButton } from "./SceneControl.js"

export const Store = () => {

    const descriptionHTML = `
    <div>Store Scene</div>
    `

    const northButton = NorthButton()
    const eastButton = EastButton()
    const southButton = SouthButton()
    const westButton = WestButton()
        
    const Buttons = `<div class="button-container">
    ${northButton}
    <div class="button-center">${eastButton}${westButton}</div>
    ${southButton}</div>`
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">So...which way would you like to go?</div>
    ${Buttons}
    `
    
        container.innerHTML = composedHTML

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}