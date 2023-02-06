import Inicio from "pages/Inicio/index.js"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Favoritos from "pages/Favoritos/index.js"
import Player from "pages/Player"
import NaoEncontrada from "pages/NaoEncontrada/index.js"
import PaginaBase from "pages/PaginaBase"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes