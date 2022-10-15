import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Navber from "./Pages/Shared/Navber/Navber";
export default function App() {
    return (
        <div>
            <Navber />
            <div className="title">
                <h1>React Laravel Demo Project</h1>
                <p>💪💪💪💪</p>
                <div>
                    <p>user: laravel-react-mongo-demo</p>
                    <p>pass: C3BCM43rWBmay1aC </p>
                    <p>
                        {/* mongodb+srv://laravel-react-mongo-demo:<password>@democluster.oafm5ro.mongodb.net/?retryWrites=true&w=majority */}
                    </p>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<App />);
}
