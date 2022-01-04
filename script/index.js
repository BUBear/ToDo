`use strict`;

import { Slider } from "./slider.js";
import { ToDo, ToDoList } from "./list.js";
import  { Modal } from "./modal.js";

let todoList = null;

window.onload = () => {

    let slider = new Slider(document.querySelector(".slider"),
    document.querySelector(".slider-inner"),
    document.querySelectorAll(".slider-item"));

    todoList = document.querySelector(".todo-list");

    // const toDo = new ToDo(document.querySelector(".todo-list"),window.localStorage);

    // for (let index = 0; index < 10; index++) {
    //     let doList = new ToDoList();
    //     doList.month = index+1;
    //     doList.day = index+1;
    //     doList.title = "테스트";
    //     doList.content = "테스트" + (index+1);
    
    //     toDo.addItem(doList);
    // }
    // toDo.update(1,1);
    // toDo.listSave();

    sizeUpdate();

    window.addEventListener("resize",sizeUpdate);

    let el = document.querySelector(".todo-list-item-add");
    el.addEventListener("click",()=>{
        let modals = document.querySelectorAll(".modal");
        let modal = new Modal(modals,"show","hide");
        modal.show("#listaddModal");
    })
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
