import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Banner from "./Pages/Home/Banner/Banner";
import Footer from "./Pages/Shared/Footer/Footer";
import Navber from "./Pages/Shared/Navber/Navber";
export default function App() {
    return (
        <div>
            <Navber />
            <Banner />
            <Footer />
        </div>
    );
}

if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<App />);
}
