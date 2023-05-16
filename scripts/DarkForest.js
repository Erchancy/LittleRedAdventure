import { EastButton, NorthButton, SouthButton, WestButton } from "./SceneControl.js"

export const DarkForest = () => {

    const descriptionHTML = `
    <div>You decide to venture forth into the forest.</div>
    <div>It was still light out when you entered and yet now it seems so dark.</div>
    <div>You are startled by a loud growling, but it's just your stomach.</div>
    <div>You forgot to eat before leaving. Lucky you there are some bread crumbs to your right.</div>
    <div>There are also some pretty red flowers further in.</div>
    <div>Your left is completely barred by brush and vines.</div>
    `

    const northButton = NorthButton()
    const eastButton = EastButton()
        
    
        const composedHTML = `
        ${descriptionHTML}
        <div>So...which way would you like to go?</div>
        ${northButton}
        ${eastButton}
        `
    
        container.innerHTML = composedHTML


    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}