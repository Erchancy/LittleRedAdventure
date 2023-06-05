import { useNavigate } from "react-router-dom"
import { Buttons } from "./Buttons"
import "./Scene.css"
import { useEffect } from "react"

export const MotherGoat = ({ buttonVisibility }) => {

debugger
  useEffect(
    () => {
      buttonVisibility.north = ""
      buttonVisibility.east = ""
      buttonVisibility.south = ""
      buttonVisibility.west = "invisible"
      buttonVisibility.inventory = ""
      localStorage.setItem("buttons", JSON.stringify(buttonVisibility))
    },
    []
  )

    const navigate = useNavigate()

    const descriptionHTML = () => {
        return <>
            <div className="description">You cross the bridge, continuing down the path before you.
                Before long you can see the forest up ahead once again.
                "Excuse me." someone says, startling you. You turn to see who.
                It's an old mamma goat, her gray fur cut short in the current style.
                It doesn't suit her.
                "I was on my way to the store deary, but I don't know if these old bones can make it. Would you help an old nanny?"
                You know the store is to the south.
                The forest is up ahead.</div>
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
            handleSceneChange("start")
            break;
          case "south":
            handleSceneChange("")
            break;
          case "west":

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