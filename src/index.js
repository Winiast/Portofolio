import { HashRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
