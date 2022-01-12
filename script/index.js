import { Slider } from "./slider.js";
import { ToDo, ToDoList } from "./list.js";
import  { Modal } from "./modal.js";

let todoList = null;

window.onload = () => {

}

let slider = new Slider();
console.log(slider._index);

todoList = document.querySelector(".todo-list");

const toDo = new ToDo(document.querySelector(".todo-list"),window.localStorage);

let doList = new ToDoList();
doList.month = 1;
doList.day = 1;
doList.title = "테스트";
doList.content = "테스트";

toDo.addItem(doList);
toDo.update(1, 1);

try {
    toDo.listLoad();
    toDo.update(1,1);
    sizeUpdate();
    
    window.addEventListener("resize",sizeUpdate);
    
}
catch (e) {
    console.log(e.message);
    //
}

elementAddEvent();

function elementAddEvent() {
    let list = todoList.getElementsByTagName("li");
    for (let i = 0; i < list.length; i++) {
        let element = list[i];

        switch (element.className) {
            case "todo-list-item": {
                let temp = element.getElementsByClassName("item-tool")[0].getElementsByTagName("i");
                let edit = temp.item(0);
                let del = temp.item(1);
    
                let modal = new Modal("변경", createEditModal(toDo.getItem(i).content));
    
                edit.addEventListener("click", () => {
                    modal.show();
                    modal.addAcceptEvent("", ["content"], (e) => {
                        toDo.itemUpdate(i, e.content.value);
                        toDo.update(1, 1);
                        elementAddEvent();
                        modal.close();
                    });
                });

                del.addEventListener("click", () => {
                    toDo.removeItem(i);
                    toDo.update(1, 1);
                    elementAddEvent();
                    modal.close();
                });
                break;
            }
            case "todo-list-item-add": {
                let el = document.querySelector(".todo-list-item-add");
                el.addEventListener("click",() => {
                    // 테스트
                    let modal = new Modal("추가",createAddModal());
                    modal.show();
                    modal.addAcceptEvent("", ["content"], (e) => {
                        let doList = new ToDoList();
                        doList.month = 1;
                        doList.day = 1;
                        doList.title = "테스트";
                        doList.content = e.content.value;

                        toDo.addItem(doList);
                        toDo.update(1, 1);
                        elementAddEvent();
                        modal.close();
                    });
                });
                break;
            }

        }
    }
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

    todoList.style.width = `${result}px`;
}

function createAddModal() {
    let label = document.createElement("label");
    label.setAttribute("for","content");
    label.textContent = "내용";

    let textarea = document.createElement("textarea");
    textarea.id = "content";

    label.appendChild(textarea);

    return label;
}

function createEditModal(content) {
    let label = document.createElement("label");
    label.setAttribute("for","content");
    label.textContent = "내용";

    let textarea = document.createElement("textarea");
    textarea.id = "content";
    textarea.value = content;

    label.appendChild(textarea);

    return label;
}