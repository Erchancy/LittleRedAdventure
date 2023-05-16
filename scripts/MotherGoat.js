import { EastButton, NorthButton, SouthButton, WestButton } from "./SceneControl.js"

export const MotherGoat = () => {

    const descriptionHTML = `
    <div>You cross the bridge, continuing down the path before you.</div>
    <div>Before long you can see the forest up ahead once again.</div>
    <div>"Excuse me." someone says, startling you. You turn to see who.</div>
    <div>It's an old mamma goat, her gray fur cut short in the current style.</div>
    <div>It doesn't suit her.</div>
    <div>"I was on my way to the store deary, but I don't know if these old bones can make it. Would you help an old nanny?"</div>
    <div>You know the store is to the south.</div>
    <div>The forest is up ahead.</div>
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