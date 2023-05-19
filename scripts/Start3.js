import { EastButton, NorthButton, ResetButton, SouthButton, WestButton } from "./SceneControl.js"

let descriptionHTML = `
<div class="description">Retracing your steps you cross back over the bridge and follow the path
Back where you started
You are Little Red Riding Hood
You've been tasked by your parents with taking some food and medicine to your sickly grandmother.
But such an endeavor has proven too much for you
And you suspect your parents may be performing some child endagerment
Well, maybe just negligence?
You aren't sure but it isn't good parenting
</div>
`


export const Start3 = () => {

    const northButton = NorthButton("North")
    const eastButton = EastButton("East")
    const southButton = SouthButton("Confront Your Parents")
    const westButton = WestButton("West")
    const resetButton = ResetButton()

    const Buttons = `<div class="button-container">
    <div id='north'class="hidden-button">${northButton}</div>
    <div class="button-center"><div id='east'class="hidden-button">${eastButton}</div>${resetButton}<div class="hidden-button">${westButton}</div></div>
    <div id='south'>${southButton}</div></div>`
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">So...which way would you like to go?</div>
    ${Buttons}
    `

    container.innerHTML = composedHTML
}




