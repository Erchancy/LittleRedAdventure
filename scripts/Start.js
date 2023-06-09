import { buttonLabelAssignment } from "./SceneControl.js"

let descriptionHTML = `
<div class="description">You are Little Red Riding Hood
You've been tasked by your parents with taking some food and medicine to your sickly grandmother.
You were given some directions: Across the river and through the woods.
Short and sweet.
You're a good kid, surely you can follow the rules.
Currently you are on the well traveled path north from your home. 
The river to your left babbles peaceably, a bridge across it in view. 
Further forward you can see the start of the woods.
To your right are beautiful plains and, come to think of it, you've never gone that way have you?</div>
`


export const Start = () => {

const Buttons = buttonLabelAssignment()
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">So...which way would you like to go?</div>
    ${Buttons}
    `

    container.innerHTML = composedHTML

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}






