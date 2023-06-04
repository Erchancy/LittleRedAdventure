import { useNavigate } from "react-router-dom"
import { Buttons } from "./Buttons"
import "./Scene.css"


export const Home = () => {

    const scene = localStorage.getItem("scene")
    const currentScene = JSON.parse(scene)
    currentScene.currentScene = "badEnd"
    localStorage.setItem("scene", JSON.stringify(currentScene))

    const navigate = useNavigate()

    const descriptionHTML = () => {
        return <>
            <div className="description">
                Honestly who cares about grandma.
                You do a little twirl on one foot and head back the way you came.
                A chill runs down your spine, like somehow you've done something big.
                Perhaps even life-changing...
                Surely not, you think.
                Surely not
                <div className="choose">BAD END</div></div>
        </>
    }

    document.addEventListener("click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "reset") {
            navigate("/")
        }
    })

    return <>
        {descriptionHTML()}
        {Buttons()}
    </>
}