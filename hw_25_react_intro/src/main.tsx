import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
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