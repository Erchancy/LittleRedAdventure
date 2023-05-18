import { EastButton, NorthButton, ResetButton, SouthButton, WestButton } from "./SceneControl.js"

export const Alraune = () => {

    const descriptionHTML = `
    <div class="description">You follow the pretty red flowers deeper into the forest
    A sickly sweet scent creeps into your nose as you travel onward
    The forest becomes a veritable garden as flora overtakes your surroundings
    In the center of the garden, rays of light beaming through the trees highlight a large rose
    You approach it
    It's taller than you are!
    You can't resist touching this beautiful flower
    It suddenly starts to bloom. Unfurling from within is a woman with skin as as green as a stalk. Her hair and lips vibrant like the plant she resides in
    Sleepily she rubs her eyes and yawns. "Hmm, This is no place for children you know."
    You feel vines and roots wrap around your feet
    You struggle to get free but the vines continue up your body until you are fully constricted
    "Cute little girls make for good fertilizer."
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