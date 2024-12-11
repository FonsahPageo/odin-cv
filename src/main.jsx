import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { CreateCv } from "./components/form.jsx";
import { FinalCV } from "./components/cv.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <CreateCv />
    <FinalCV />
  </StrictMode>
);
