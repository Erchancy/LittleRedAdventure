import { useEffect } from "react";
import "./Buttons.css"
export const Buttons = () => {

    const scene = localStorage.getItem("scene")
    const currentScene = JSON.parse(scene)

    const buttonDisplay = () => {
        switch (currentScene.currentScene) {
            case "badEnd":
                const badEndButtons = () => {
                    const northButton = document.getElementById("north");
                    northButton.classList.add("hidden");
                    const eastButton = document.getElementById("east");
                    eastButton.classList.add("hidden");
                    const southButton = document.getElementById("south");
                    southButton.classList.add("hidden");
                    const westButton = document.getElementById("west");
                    westButton.classList.add("hidden");
                    const inventoryButton = document.getElementById("inventory");
                    inventoryButton.classList.add("hidden");
                }
                badEndButtons()
                break;
            case "noWest":
                const hideWest = () => {
                    const westButton = document.getElementById("west");
                    westButton.classList.add("hidden");
                }
                hideWest()
                break;
            case "noEast":
                const hideEast = () => {
                    const eastButton = document.getElementById("east");
                    eastButton.classList.add("hidden");
                }
                hideEast()
                break;
            case "noNorth":
                const hideNorth = () => {
                    const NorthButton = document.getElementById("north");
                    NorthButton.classList.add("hidden");
                }
                hideNorth()
                break;
            case "noSouth":
                const hideSouth = () => {
                    const SouthButton = document.getElementById("south");
                    SouthButton.classList.add("hidden");
                }
                hideSouth()
                break;
        }
    }

    useEffect(() => {
        buttonDisplay()
    },
        [currentScene])

    return <>
        <section className="button-container">
            <div className="button-top">
                <button id="north" className="button">North</button>
                <button id="inventory" className="button">Inventory</button>
            </div>
            <div className="button-center">
                <button id="west" className="button">West</button>
                <button id="reset" className="button">Reset</button>
                <button id="east" className="button">East</button>
            </div>
            <div className="button-bottom">
                <button id="south" className="button">South</button>
            </div>
        </section>
    </>
}