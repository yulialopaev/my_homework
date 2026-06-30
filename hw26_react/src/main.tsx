import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./App";
import './style.css'

const rootElement = document.getElementById("root");

if(!rootElement) throw new Error("Element with id 'root' not found");

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
)