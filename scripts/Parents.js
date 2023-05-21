import { buttonLabelAssignment } from "./SceneControl.js"

let descriptionHTML = `
<div class="description">As you walk back down the path you can see your home appear in the horizon
It's a quaint little thing
The yellow painted wood panels bleached almost entirely white from the sun
You approach the front door, arm raised ready to knock on the door
You can hear yelling
Suddenly the conviction in your body dissipates
You stand there for a few minutes listening to the yelling
It's too muffled to parse out, or maybe you're just used to tuning it out
You're startled by the door opening
Your dad is standing there
He looks at you in surprise for a moment before embracing you "Oh you're safe! Where did you run off to?"
"I was going to grandma's house, like you told me to," you inform him with no small amount of confusion
"What!? How did you get that into your head?" your mother appears behind him
"You told her to go there alone!?" your mother yells at your father
"Of course not!" he yells back
You all go inside as they continue to argue
You return to your room and lay in the bed, covering your head like normal when this happens
But this doesn't make any sense at all
Your mother and father both came outside while you were playing and told you to deliver food and medicine to grandma
How could they not remeber that?
It hasn't been that long
As you continue to mull the thoughts over in your head, you slowly drift to sleep
<div class="choose">GOOD END?</div></div>
`


export const Parents = () => {

    const Buttons = buttonLabelAssignment()
    

    const composedHTML = `
    ${descriptionHTML}
    ${Buttons}
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
}




