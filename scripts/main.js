import { Start } from "./Start.js"

let Scene = Start()

const render = () => {
    Scene
    container.innerHTML += `<div id="overlay" class="modal">
    <div class="modal-content">
        <h1>Inventory Items</h1>
        <p></p>
    </div>
</div>`
}

render()

document.addEventListener("sceneChanged", (event) => {
    Scene = event
    render()
})
