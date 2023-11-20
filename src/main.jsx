import React from "react";
import ReactDOM from "react-dom/client";
import Pass from "./Pass.jsx";
import Logo from "./components/Logo.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Logo />
        <Pass />
    </React.StrictMode>
);
