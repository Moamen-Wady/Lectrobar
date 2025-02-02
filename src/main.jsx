import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Loading from "./Loading";

const root = createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <Loading />
  </StrictMode>
);
setTimeout(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}, 4000);

// root.render(
