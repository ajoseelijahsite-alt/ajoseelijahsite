import React from "react";
import ReactDOM from "react-dom/client";
import Lenis from "lenis";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import App from "./App";
import "./index.css";

const lenis = new Lenis({
  duration: 1.1,
  smoothWheel: true,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
