import { Start } from "./Start.js"

let Scene = Start()

const render = () => {
    Scene
    container.innerHTML += `<div id="overlay" class="modal">
    <div class="modal-content">
        <h2>Inventory Items</h2>
        <section class="modal-item">
            <p id="basket" class="item-detail">Basket of Goodies</p>
            <div id="description" class="item-description">
                <p class="item-description-content">A basket full of food and medicine for grandma</p>
            </div>
        </section>
    </div>
</div>`
}

render()

document.addEventListener("sceneChanged", (event) => {
    Scene = event
    render()
})
