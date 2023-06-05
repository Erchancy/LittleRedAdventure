import { Outlet, Route, Routes } from "react-router-dom"
import { Start } from "../scenes/Start"
import { Home } from "../scenes/Home"
import { MotherGoat } from "../scenes/MotherGoat"
import { ShepherdBoy } from "../scenes/ShepherdBoy"

export const SceneControl = () => {

    localStorage.setItem("buttons", JSON.stringify({
        north: "",
        east: "",
        south: "",
        west: "",
        inventory: "",
    }))
    

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Start buttonVisibility={JSON.parse(localStorage.getItem("buttons"))}/>
                    <Outlet />
                </>
            }>
            </Route>
            <Route path="home" element={<Home buttonVisibility={JSON.parse(localStorage.getItem("buttons"))}/>} />
            <Route path="motherGoat" element={<MotherGoat buttonVisibility={JSON.parse(localStorage.getItem("buttons"))}/>} />
            <Route path="shepherdBoy" element={<ShepherdBoy buttonVisibility={JSON.parse(localStorage.getItem("buttons"))}/>} />
        </Routes>
    )
}