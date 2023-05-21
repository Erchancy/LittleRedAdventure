import { buttonLabelAssignment } from "./SceneControl.js"

export const RunAway = () => {

    const descriptionHTML = `
    <div class="description">You decide, quite reasonably you think, to go home
    Grandma may needs this medicine and food but she'll live a day without won't she?
    And coming to think of it, why did your parents send you to go through the woods all alone?
    This isn't the type of thing a child should be doing.
    Making your way out of the forest, you can see the bridge again
    Mamma goat is nowhere to be seen
    Made her way to the store you hope</div>
    `

    const Buttons = buttonLabelAssignment()
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">So...which way would you like to go?</div>
    ${Buttons}
    `
    
    container.innerHTML = composedHTML

    const southButton = document.getElementById("south")
    southButton.classList.add("hidden")
    const westButton = document.getElementById("west")
    westButton.classList.add("hidden")

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}