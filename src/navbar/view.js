import { createElement } from "@wordpress/element"
import ReactDOM from "react-dom"
import React from "react"
import {Navbar} from './components/Navbar'


document.addEventListener("DOMContentLoaded", () => {
  const navRoot = document.getElementById('navbar-root')
  ReactDOM.render(<Navbar />, navRoot);
});
