export const WitchHouse = () => {

    const descriptionHTML = `
    <div>You follow the path of breadcrumbs, hoping that it leads to a full loaf.</div>
    <div>Well, a mostly full loaf you suppose.</div>
    <div>But what you come upon is beyond your wildest dreams.</div>
    <div>A house made entirely of candy. The door is suspiciously open. No reason not to go right on in.</div>
    <div>Neatly folded by the entrance are some children's clothes. An odd place to keep them.</div>
    <div>Nevermind that now, you can smell something delicious.</div>
    <div>Following the scent into the kitchen you spy a large cauldron, its conttents boiling.</div>
    <div>"Oh lucky day!" says an old woman as she comes out from her pantry."Tell me child, are you hungry>"</div>
    <div>"Starving," you reply matter of factly.</div>
    <div>"Then stay for dinner won't you?"</div>
    <div>If there was ever anything you learned from your parents it was to take free food when offered, "Of course!" you exclaim</div>
    <div>BAD END</div>
    `

        const composedHTML = `
        ${descriptionHTML}
        `
    
        container.innerHTML = composedHTML


    const customEvent = new CustomEvent("sceneChanged")
    document.dispatchEvent(customEvent)
}