import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const rel = setTimeout(() => {
  const style = document.getElementById("main-css");
  style.rel = "stylesheet";
}, 50);
window.onload = rel;

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
