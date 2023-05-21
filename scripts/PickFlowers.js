import { buttonLabelAssignment } from "./SceneControl.js"

export const PickFlowers = () => {

    const descriptionHTML = `
    <div class="description">You decide that Mr.Wolf is right and some flowers may cheer your grandmother up
    Following the only open path into the forest leads you into a sort of clearing
    Somehow it relaxes you
    You decide a small break is warrented, this is hard work after all
    You grab a cookie out of your treat basket and sit on the grass
    Peaking out of the foliage to your right you can see some red flowers
    And to your left yellow flowers
    And further in too! Blue flowers!
    There are plenty of flowers to choose from</div>
    `

    const Buttons = buttonLabelAssignment()
    

    const composedHTML = `
    ${descriptionHTML}
    <div class="choose">Which flowers were grandma's favorite again?</div>
    ${Buttons}
    `
    
    container.innerHTML = composedHTML

    const southButton = document.getElementById("south")
    southButton.classList.add("hidden")

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}