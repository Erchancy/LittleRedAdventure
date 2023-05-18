import { EastButton, NorthButton, ResetButton, SouthButton, WestButton } from "./SceneControl.js"

export const WitchHouse = () => {

    const descriptionHTML = `
    <div class="description">You follow the path of breadcrumbs, hoping that it leads to a full loaf.
    Well, a mostly full loaf you suppose.
    But what you come upon is beyond your wildest dreams.
    A house made entirely of candy. The door is suspiciously open. No reason not to go right on in.
    Neatly folded by the entrance are some children's clothes. An odd place to keep them.
    Nevermind that now, you can smell something delicious.
    Following the scent into the kitchen you spy a large cauldron, its conttents boiling.
    "Oh lucky day!" says an old woman as she comes out from her pantry."Tell me child, are you hungry?"
    "Starving," you reply matter of factly.
    "Then stay for dinner won't you?"
    If there was ever anything you learned from your parents it was to take free food when offered, "Of course!" you exclaim
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