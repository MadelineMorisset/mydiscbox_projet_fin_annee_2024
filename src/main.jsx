import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./frontend/styles/css_reset.css";
import "./frontend/styles/style.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
