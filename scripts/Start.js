import { EastButton, NorthButton, SouthButton, WestButton } from "./SceneControl.js"

let descriptionHTML = `<div>You are Little Red Riding Hood and you've been tasked with taking some food to your sickly grandmother.</div>
<div>You were given some directions: Across the river and through the woods. Short and sweet. You're a good kid, surely you can follow the rules.</div>
<div>Currently you are on the well traveled path from your home. The river to your left babbles peaceably, a bridge across in view.</div>
<div>Further forward you can see the start of the woods.</div>
<div>To your right are beautiful plains, and come to think of it, you've never gone that way have you?</div>`

export const Start = () => {

    const northButton = NorthButton()
    const eastButton = EastButton()
    const southButton = SouthButton()
    const westButton = WestButton()
    

    const composedHTML = `
    ${descriptionHTML}
    <div>So...which way would you like to go?</div>
    ${northButton}
    ${eastButton}
    ${southButton}
    ${westButton}
    `

    container.innerHTML = composedHTML
}




