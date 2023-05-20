import { buttonLabelAssignment } from "./Buttons.js"

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

    const Buttons = buttonLabelAssignment()
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">So...which way would you like to go?</div>
    ${Buttons}
    `

    container.innerHTML = composedHTML

    const northButton = document.getElementById("north")
    northButton.classList.add("hidden")
    const eastButton = document.getElementById("east")
    eastButton.classList.add("hidden")
    const westButton = document.getElementById("west")
    westButton.classList.add("hidden")
}




