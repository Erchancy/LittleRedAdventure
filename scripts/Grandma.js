import { buttonLabelAssignment } from "./SceneControl.js"

export const Grandma = () => {

    const descriptionHTML = `
    <div class="description">Not recalling any other directions than to head through the woods, you choose to go north
    You approach the old cabin and you think you recall being here before
    You knock on the door
    "Come on in!" calls a voice from within
    You open the door and walk inside
    It's pretty dark in here
    Laying in a bed in the middle of the room is your grandma
    She's wearing her pink nightgown and cap
    Grandma looks very strange
    "Oh if it isn't my lovely granddaughter," grandma says with a gruff voice
    "What a deep voice you have!" you exclaim
    "The better to greet you with," she responds
    You walk closer and notice another oddity, "Goodness, what big eyes you have!"
    "The better to see you with," she responds
    You're right next to the bed when more details jump out at you, "And what big hands you have!"
    "The better to embrace you with," she responds
    At this distance you can notice her large mouth, drool leaking through jagged teeth, "What a big mouth you have!"
    "The better to eat with my dear."
    You don't remember you grandma being so ugly, but regardless you're here.
    You give your grandmother the snacks and medicine
    The two of you chat while she eats
    You're a good kid
    <div class="choose">GOOD END</div></div>
    `

    const Buttons = buttonLabelAssignment()


    const composedHTML = `
        ${descriptionHTML}${Buttons}
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


    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}