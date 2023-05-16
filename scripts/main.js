import { Start } from "./Start.js"

let Scene = Start()

const render = () => {
    Scene
}

render()

document.addEventListener("sceneChanged", (event) => {
    Scene = event
    render()
})
