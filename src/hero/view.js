import { createElement } from "@wordpress/element"
import ReactDOM from "react-dom"
import React from "react"
import {Hero} from "./components/Hero"


document.addEventListener("DOMContentLoaded", () => {
  const heroRoot = document.getElementById('hero-root')
  ReactDOM.render(<Hero />, heroRoot);
});
