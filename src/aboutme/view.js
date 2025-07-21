import { createElement } from "@wordpress/element"
import ReactDOM from "react-dom"
import React from "react"
import AboutMe from "./components/AboutMe"


document.addEventListener("DOMContentLoaded", () => {
  const aboutmeRoot = document.getElementById('aboutme-root')
  ReactDOM.render(<AboutMe />, aboutmeRoot);
});
