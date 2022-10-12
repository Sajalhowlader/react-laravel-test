import React from "react";
import { createRoot } from "react-dom/client";

export default function App() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<App />);
}
