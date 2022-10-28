"use strict";

const main = document.querySelector("main");
const buttons = document.querySelector(".buttons");
const button = document.querySelectorAll(".btn");
const flex = document.querySelector(".flex");
const board = document.querySelector(".board");

// Container for the grid

let color = "aqua";

// main.insertBefore(container, buttons);

const clearBoard = function () {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => box.remove());
};

const colorBox = function () {
  if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
};

const populateBoard = function (size = 4) {
  clearBoard();

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let box = document.createElement("div");
    box.addEventListener("mouseover", colorBox);
    box.classList.add("box");
    // box.addEventListener('mouseover')
    // box.addEventListener('mousedown')
    board.insertAdjacentElement("beforeend", box);
  }
};

populateBoard();
const slider = document.getElementById("slider");
const number = document.getElementById("number");
slider.oninput = function () {
  number.innerHTML = slider.value;
  let size = slider.value;
  populateBoard(size);
};

// Buttons
const resetBtn = document.querySelector(".btn--reset");

resetBtn.addEventListener("click", function () {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => (box.style.backgroundColor = "white"));
});

const changeColor = function (choice) {
  color = choice;
};
