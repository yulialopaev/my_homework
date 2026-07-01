import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import '../css/style.css'

const rootElement = document.querySelector<HTMLDivElement>("#root");

if (!rootElement) {
  throw new Error('Element with id "root" was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
