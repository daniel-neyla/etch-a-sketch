"use strict";

const main = document.querySelector("main");
const buttons = document.querySelector(".buttons");
const button = document.querySelectorAll(".btn");
const flex = document.querySelector(".flex");

// Container for the grid
const container = document.createElement("div");
container.classList.add("container");
main.insertBefore(container, buttons);
// main.insertBefore(container, buttons);

const slider = document.getElementById("slider");
const number = document.getElementById("number");
slider.oninput = function () {
  number.innerHTML = slider.value;
  let size = slider.value;
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    // box.addEventListener('mouseover')
    // box.addEventListener('mousedown')
    container.appendChild(box);
  }
};
