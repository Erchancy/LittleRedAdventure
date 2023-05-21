import { buttonLabelAssignment } from "./SceneControl.js"

let sceneCounter = 1


export const Start2 = () => {
    let descriptionHTML = ""
    
    if (sceneCounter === 1) {
        descriptionHTML = `
    <div class="description">You are Little Red Riding Hood
    You've been tasked by your parents with taking some food and medicine to your sickly grandmother.
    You were given some directions: Across the river and through the woods.
    Short and sweet.
    Yada yada yada, we've been through this before</div>
    `
    } else if (sceneCounter === 2) {
    descriptionHTML = `
    <div class="description">You are Little Indecisive Riding Hood
    With all the back and forth you do it's a wonder you made it out of the house
    No seriously
    Make a decision, stick with it</div>
    `
    } else if (sceneCounter === 3) {
        descriptionHTML = `<div class="description">...</div>`
    } else if (sceneCounter >= 4) {
        descriptionHTML = `<div class="description">And so Little Indecisive Riding Hood wondered in circles all day until she passed out and died
        <div class="choose">BAD END</div></div>
        `
    }
    
    const Buttons = buttonLabelAssignment()
    
    let composedHTML = ""
    
    if (sceneCounter >= 4) {
        composedHTML = `${descriptionHTML}${Buttons}`
    } else {
        composedHTML = `
        ${descriptionHTML}
        <div class="choose">So...which way would you like to go?</div>
        ${Buttons}
        `
    }

    container.innerHTML = composedHTML

    if (sceneCounter >= 4) {
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

    const customEvent = new CustomEvent("repeatScene")
    document.dispatchEvent(customEvent)
}




document.addEventListener("repeatScene", () => {
    sceneCounter++
    console.log(sceneCounter)

document.addEventListener("resetClick", () => {
    sceneCounter = 1
})
})




