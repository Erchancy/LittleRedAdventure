export const Home = () => {

    const descriptionHTML = `
    <div>Honestly who cares about grandma.</div>
    <div>You do a little twirl on one foot and head back the way you came.</div>
    <div>A chill runs down your spine, like somehow you've done something big.</div>
    <div>Perhaps even life-changing...</div>
    <div>Surely not, you think.</div>
    <div>Surely not</div>
    <div>BAD END</div>
    `
        
    const composedHTML = `
    ${descriptionHTML}
    `
    
    container.innerHTML = composedHTML

    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}