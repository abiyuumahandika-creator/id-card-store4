import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Pulihkan tema sebelum React merender halaman
const savedTheme = localStorage.getItem("nexore-theme");
document.documentElement.dataset.theme =
  savedTheme === "dark" ? "dark" : "light";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
