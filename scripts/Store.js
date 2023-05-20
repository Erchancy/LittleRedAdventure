import { buttonLabelAssignment } from "./Buttons.js"

export const Store = () => {

    const descriptionHTML = `
    <div class="description">Being the nice young lady you are, you decide to help the mamma goat
    You spend an agonizingly long time walking the mama goat to the store
    She spends the entire trip telling you her life story
    As a child she always wanted to be an astronaut, and she studied vigorously towards that goal
    Turns out they won't let goats be astronauts though. Whatever happened to equality in the workplace?
    Then she met some hot young ram named Enrico, who broke her heart and left her to raise 7 children
    And then...Why there's the store now! Time to go inside
    You spend an eternity going through each aisle meticulously as mamma goat checks the deals and her coupons
    You spend a second eternity waiting in the only open checkout line
    You spend a third loading all the grocery bags back into her basket
    Finally you escape the store
    "Thank you so much deary," the mother goat say, giving you a peck on the cheek
    Now, back to business...
    Unfortunately you took so long in there you don't remember what you were doing. Didn't you have something to do?
    <div class="choose">BAD END</div></div>
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