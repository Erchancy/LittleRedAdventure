import { Outlet, Route, Routes } from "react-router-dom"
import { Start } from "../scenes/Start"
import { Home } from "../scenes/Home"
import { MotherGoat } from "../scenes/MotherGoat"
import { ShepherdBoy } from "../scenes/ShepherdBoy"

export const SceneControl = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Start />
                    <Outlet />
                </>
            }>
            </Route>
                <Route path="home" element={<Home />} />
                <Route path="motherGoat" element={<MotherGoat />} />
                <Route path="shepherdBoy" element={<ShepherdBoy />} />
        </Routes>
    )
}