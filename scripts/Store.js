import { EastButton, NorthButton, SouthButton, WestButton } from "./SceneControl.js"

export const Store = () => {

    const descriptionHTML = `
    <div>Store Scene</div>
    `

    const northButton = NorthButton()
    const eastButton = EastButton()
    const southButton = SouthButton()
    const westButton = WestButton()
        
    const composedHTML = `
    ${descriptionHTML}
    <div>So...which way would you like to go?</div>
    ${northButton}
    ${eastButton}
    ${southButton}
    ${westButton}
    `
    
        container.innerHTML = composedHTML

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}