import { buttonLabelAssignment } from "./Buttons.js"

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

    const Buttons = buttonLabelAssignment()


    const composedHTML = `
        ${descriptionHTML}${Buttons}
        `
    
    container.innerHTML = composedHTML

    const northButton = document.getElementById("north")
    northButton.classList.add("hidden")
    const eastButton = document.getElementById("east")
    eastButton.classList.add("hidden")
    const southButton = document.getElementById("south")
    southButton.classList.add("hidden")
    const westButton = document.getElementById("west")
    westButton.classList.add("hidden")
    const inventoryButton = document.getElementById("inventory")
    inventoryButton.classList.add("hidden")

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}