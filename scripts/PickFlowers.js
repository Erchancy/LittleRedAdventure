import { EastButton, NorthButton, ResetButton, SouthButton, WestButton } from "./SceneControl.js"

export const PickFlowers = () => {

    const descriptionHTML = `
    <div class="description">You decide that Mr.Wolf is right and some flowers may cheer your grandmother up
    Following the only open path into the forest leads you into a sort of clearing
    Somehow it relaxes you
    You decide a small break is warrented, this is hard work after all
    You grab a cookie out of your treat basket and sit on the grass
    Peaking out of the foliage to your right you can see some flower
    And to your left
    And to further in too!
    There are plenty of flowers to choose from</div>
    `

    const northButton = NorthButton("Blue")
    const eastButton = EastButton("Red")
    const southButton = SouthButton("South")
    const westButton = WestButton("Yellow")
    const resetButton = ResetButton()
        
    const Buttons = `<div class="button-container">
    <div>${northButton}</div>
    <div class="button-center">${eastButton}${resetButton}${westButton}</div></div>
    ${southButton}</div>`
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">Which flowers were grandma's favorite again?</div>
    ${Buttons}
    `
    
        container.innerHTML = composedHTML

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}