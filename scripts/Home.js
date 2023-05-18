import { ResetButton } from "./SceneControl.js"

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

    const resetButton = ResetButton()
        
    const composedHTML = `
    ${descriptionHTML}${resetButton}
    `
    
    container.innerHTML = composedHTML

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}