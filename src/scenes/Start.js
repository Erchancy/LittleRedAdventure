import { useNavigate } from "react-router-dom"
import { Buttons } from "./Buttons"
import "./Scene.css"

export const Start = () => {

    localStorage.setItem("scene", JSON.stringify({
        currentScene: "start"
    }))
    
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

    document.addEventListener("click", (clickEvent) => {
        const itemClicked = clickEvent.target
        switch (itemClicked.id) {
          case "north":

            break;
          case "east":
            navigate("/shepherdBoy")
            break;
          case "south":
            navigate("/home")
            break;
          case "west":
            navigate("/motherGoat")
            break;
          case "reset":
            navigate("/")
            break;
          case "inventory":

            break;
        }
      })

    return <>
        {descriptionHTML()}
        <div className="choose">So...which way would you like to go?</div>
        {Buttons()}
    </>

}
