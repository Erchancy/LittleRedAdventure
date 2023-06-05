import { useNavigate } from "react-router-dom"
import { Buttons } from "./Buttons"
import "./Scene.css"
import { useEffect } from "react"

export const Start = ({ buttonVisibility }) => {

  useEffect(
    () => {
      buttonVisibility.north = ""
      buttonVisibility.east = ""
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
      <div className="description">
        <p>You are Little Red Riding Hood</p>
        <p>You've been tasked by your parents with taking some food and medicine to your sickly grandmother.
          You were given some directions: Across the river and through the woods.
          Short and sweet.
          You're a good kid, surely you can follow the rules.
          Currently you are on the well traveled path north from your home.
          The river to your left babbles peaceably, a bridge across it in view.
          Further forward you can see the start of the woods.
          To your right are beautiful plains and, come to think of it, you've never gone that way have you?</p></div>
    </>
  }

  const handleSceneChange = (currentScene) => {
    switch (currentScene) {
      case "shepherdBoy":
        navigate("/shepherdBoy")
        break;
      case "home":
        navigate("/home")
        break;
      case "motherGoat":
        navigate("/motherGoat")
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
        handleSceneChange("shepherdBoy")
        break;
      case "south":
        handleSceneChange("home")
        break;
      case "west": //Clicking the west button causes this to be invoked even when I am not on this screen, possibly because all my scenes are siblings. Needs fixing
        handleSceneChange("motherGoat")
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
    <div className="choose">So...which way would you like to go?</div>
    {Buttons(buttonVisibility)}
  </>

}
