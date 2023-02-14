// Rotas
import { BrowserRouter, Routes, Route } from "react-router-dom"

// COMPONENTS
import Home from "../pages/Home"
import Cardapio from "../pages/Cardapio"

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route  path="/cardapio" element={<Cardapio />} />
            </Routes>
        </BrowserRouter>
    )
}