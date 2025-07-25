import { createElement } from "@wordpress/element"
import ReactDOM from "react-dom"
import React from "react"
import {FlipWords} from "./components/FlipWords"

document.addEventListener("DOMContentLoaded", () => {

  const filpWordsBlocks = document.querySelectorAll('.flipwords-root')

  filpWordsBlocks.forEach((el) => {
    
    const words = JSON.parse(el.dataset.words);
    const size = el.dataset.size

    ReactDOM.render(
      <FlipWords words={words} className={size} />,
      el
    );
  });
});
