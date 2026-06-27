import {createRoot} from "react-dom/client";
import {StrictMode} from "react";

// @ts-ignore
// import "../dist/main.css"
import "./style.css"
import App from "./App";


const rootElement = document.getElementById("root")

if (!rootElement) {
    throw new Error("No root element found")
}

createRoot(rootElement).render(
    <StrictMode>
        <App/>
    </StrictMode>
)