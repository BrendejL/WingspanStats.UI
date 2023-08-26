import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Players from "./pages/players";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="players" element={<Players />} />
            </Routes>
        </BrowserRouter>
    )
}