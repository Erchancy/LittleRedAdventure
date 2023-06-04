import { Route, Routes } from "react-router-dom"
import { SceneControl } from "./views/SceneControl"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Authorized } from "./views/Authorized"

export const LittleRedAdventure = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<SceneControl />
				</>
			</Authorized>

		} />
	</Routes>
}

