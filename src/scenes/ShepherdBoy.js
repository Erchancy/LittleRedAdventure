import { useNavigate } from "react-router-dom"
import { Buttons } from "./Buttons"
import "./Scene.css"
import { useEffect } from "react"

export const ShepherdBoy = ({ buttonVisibility }) => {

    useEffect(
        () => {
            buttonVisibility.north = "invisible"
            buttonVisibility.east = "invisible"
            buttonVisibility.south = ""
            buttonVisibility.west = ""
            buttonVisibility.inventory = ""
            localStorage.setItem("buttons", JSON.stringify(buttonVisibility))
        },
        []
    )

    const navigate = useNavigate()

    const descriptionHTML = () => {
        return <>
            <div className="description">You decide to checkout the mysterious plains.
                You bask in your ability to exercise free will.
                You get the feeling some man named Sartre would be proud.
                But really these plains are quite boring aren't they?
                "Hello," a young boy says, tearing you out of your thoughts.
                "I've never seen you before," the boy says.
                "I don't usually come this way," you reply.
                "I'm supposed to be watching these sheep, but it's sooooooo boooooring. We should play instead."
                You are reminded you were on your own errand, but can't help yourself from asking, "Like what?"
                "I know a really fun game where we tell the villagers there's a wolf, even though there isn't one. They get so riled up, it's hilarious!"
                The boy starts to laugh a bit just thinking about it
                You could go with the boy down to his village
                But you could also head back to the path and do your duty as a caring granddaughter</div>
        </>
    }

    const handleSceneChange = (currentScene) => {
        switch (currentScene) {
            case "start":
                navigate("/")
                break;
            case "reset":
                navigate("/")
                break;
        }
    }

    document.addEventListener("click", (clickEvent) => {
        const itemClicked = clickEvent.target
        switch (itemClicked.id) {
            case "north":

                break;
            case "east":

                break;
            case "south":
                handleSceneChange("")
                break;
            case "west":
                handleSceneChange("start")
                break;
            case "reset":
                handleSceneChange("reset")
                break;
            case "inventory":

                break;
        }
    })

    return <>
        {descriptionHTML()}
        {Buttons(buttonVisibility)}
    </>
}
