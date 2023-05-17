import { EastButton, NorthButton, SouthButton, WestButton } from "./SceneControl.js"

export const MotherGoat = () => {

    const descriptionHTML = `
    <div class="description">You cross the bridge, continuing down the path before you.
    Before long you can see the forest up ahead once again.
    "Excuse me." someone says, startling you. You turn to see who.
    It's an old mamma goat, her gray fur cut short in the current style.
    It doesn't suit her.
    "I was on my way to the store deary, but I don't know if these old bones can make it. Would you help an old nanny?"
    You know the store is to the south.
    The forest is up ahead.</div>
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