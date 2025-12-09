import { Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Films from "../pages/Films/Films";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/films" element={<Films />} />
        </Routes>
    );
}
