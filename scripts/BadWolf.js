import { buttonLabelAssignment } from "./SceneControl.js"

export const BadWolf = () => {

    const descriptionHTML = `
    <div class="description">Heading into the forest as per the directions is the more responsible choice
    Sorry old nanny, maybe next time
    You proceed into forest
    It was still light out when you entered and yet now it seems so dark.
    You are startled by a loud growling
    Looking around you see a large black wolf circling you
    "What have we here?" the beast asks "Didn't your parents ever tell you not to play in the forest?"
    Gulping you reply, "I'm on my way to my grandmother's house, she's sick."
    "Is that right?" the wolf says, his interest seemingly peaked "And she lives in that cabin just outside the forest does she?"
    Unable to summon the courage to answer him again you just nod your head
    The wolf chuckles lightly, "Well, don't you think she'd like it if you brought some flowers with you?"
    You nod again
    "There are some further in, pick her favorites," the wolf starts to walk away but stops and turn "Oh! And do be careful, it's dangerous out here."
    The wolf disappears into the forest
    Apparently there are flowers up ahead
    The paths to your left and right are barred by brush
    Your heart is still pounding</div>
    `

    const Buttons = buttonLabelAssignment()
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">So...which way would you like to go?</div>
    ${Buttons}
    `
    
    container.innerHTML = composedHTML

    const eastButton = document.getElementById("east")
    eastButton.classList.add("hidden")
    const westButton = document.getElementById("west")
    westButton.classList.add("hidden")

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}