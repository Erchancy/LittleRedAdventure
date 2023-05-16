import { EastButton, NorthButton, SouthButton, WestButton } from "./SceneControl.js"

export const ShepherdBoy = () => {

    const descriptionHTML = `
    <div>You decide to checkout the mysterious plains.</div>
    <div>You bask in your ability to exercise free will.</div>
    <div>You get the feeling some man named Sartre would be proud.</div>
    <div>But really these plains are quite boring aren't they?</div>
    <div>"Hello," a young boy says, tearing you out of your thoughts.</div>
    <div>"I've never seen you before," the boy says.</div>
    <div>"I don't usually come this way," you reply.</div>
    <div>"I'm supposed to be watching these sheep, but it's sooooooo boooooring. We should play instead."</div>
    <div>You are reminded you were on your own errand, but can't help yourself from asking, "Like what?"</div>
    <div>"I know a really fun game where we tell the villagers there's a wolf, even though there isn't one. They get so riled up, it's hilarious!"</div>
    <div>The boy starts to laugh a bit just thinking about it</div>
    <div>You could go with the boy down to his village</div>
    <div>But you could also head back to the path and do your duty as a caring granddaughter</div>
    `

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

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}