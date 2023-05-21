import { buttonLabelAssignment } from "./SceneControl.js"

export const Allergic = () => {

    const descriptionHTML = `
    <div class="description">Grandma really liked yellow flowers...you think
    No reason to question yourself now, you can always get some of the other flowers too
    You start picking some of the dainty looking yellow flowers
    Taking one up to your face you take a deep breath
    It smells really nice
    Grandma will love these, even if they aren't her favorite
    After you gather a bouquet of them, you get ready to resume your journey
    ...
    That's odd
    You feel kinda itchy
    No, really itchy
    Like really really itchy
    You start to cough, dropping the pretty flowers
    They're soon followed by your body as your knees buckle from the hacking and wheezing
    You are surrounded by an alluring yellow sea
    You struggle to breath
    Your vision blurs
    All you see is yellow
    Yellow
    Yellow
    Yellow
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