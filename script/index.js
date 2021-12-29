`use strict`;

import { Slider } from "./slider.js"

let todoList = null;

window.onload = () => {

    let slider = new Slider(document.querySelector(".slider"),
    document.querySelector(".slider-inner"),
    document.querySelectorAll(".slider-item"));

    todoList = document.querySelector(".todo-list");

    sizeUpdate();

    window.addEventListener("resize",sizeUpdate);
}

function sizeUpdate() {
    let width = 250;
    let margin = 10;
    let innerWidth = window.innerWidth;
    let result = 0;
    while(true) {
        result += width + margin;
        if(result >= innerWidth) {
            result -= width + margin;
            break;
        }
    }

    todoList.style.width = `${result}px`
}