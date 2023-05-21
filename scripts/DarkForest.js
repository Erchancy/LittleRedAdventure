import { buttonLabelAssignment } from "./SceneControl.js"

export const DarkForest = () => {

    const descriptionHTML = `
    <div class="description">You decide to venture forth into the forest.
    It was still light out when you entered and yet now it seems so dark.
    You are startled by a loud growling, but it's just your stomach.
    You forgot to eat before leaving. Lucky you there are some bread crumbs to your right.
    There are also some pretty red flowers further in.
    Your left is completely barred by brush and vines.
    Then again, the forest is pretty scary, you could always turn back.</div>
    `

    const Buttons = buttonLabelAssignment()
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">So...which way would you like to go?</div>
    ${Buttons}
    `
    
    container.innerHTML = composedHTML

    const westButton = document.getElementById("west")
    westButton.classList.add("hidden")


    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}