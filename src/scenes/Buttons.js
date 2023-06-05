import { useEffect } from "react";
import "./Buttons.css"
export const Buttons = (buttons) => {

    const buttonDisplay = () => {
        if (buttons.north === "invisible") {
            const northButton = document.getElementById("north");
            northButton.classList.add("hidden");
        }
        if (buttons.east === "invisible") {
            const eastButton = document.getElementById("east");
            eastButton.classList.add("hidden");
        }
        if (buttons.south === "invisible") {
            const southButton = document.getElementById("south");
            southButton.classList.add("hidden");
        }
        if (buttons.west === "invisible") {
            const westButton = document.getElementById("west");
            westButton.classList.add("hidden");
        }
        if (buttons.inventory === "invisible") {
            const inventoryButton = document.getElementById("inventory");
            inventoryButton.classList.add("hidden");
        }
    }

    useEffect(() => {
        buttonDisplay()
    },
        [buttons])

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