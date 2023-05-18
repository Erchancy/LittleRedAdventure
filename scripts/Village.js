import { EastButton, NorthButton, ResetButton, SouthButton, WestButton } from "./SceneControl.js"

export const Village = () => {

    const descriptionHTML = `
    <div class="description">Pranking the villagers sounds like a grand time.
    The two of you run down to the village, making a race out it
    "Wolf! Wolf!" the boy cries as you both come into town, "There's a wolf on the loose!"
    "A big bad wolf!" you add, running down the street
    But the town is oddly silent
    Oddly empty
    Curious stains on buildings
    "I'm aware," a gruff voice announces from behind the two of you.
    You turn to see a large black haired wolf standing as if he were a man. His yellowed teeth spread in a grin
    "He's me," the wolf says before attacking the shepherd boy.
    You run for dear life but trip and fall over something. You can hear the wolf coming for you
    <div class="choose">BAD END</div></div>
    `

    const northButton = NorthButton()
    const eastButton = EastButton()
    const southButton = SouthButton()
    const westButton = WestButton()
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