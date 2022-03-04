import { Slider } from "./slider.js";
import { ToDo, ToDoList } from "./list.js";
import { Modal } from "./modal.js";
import { Calendar } from "./calender.js";

window.onload = () => {};

let slider = new Slider();
slider.addEventListener("slidechange",(e)=>{
  console.log(e.detail.index);
});

const toDo = new ToDo(document.querySelector(".todo-list"), window.localStorage);

let slider = new Slider();
let monthDay = [31,28,31,30,31,30,31,31,30,31,30,31];

try {
  toDo.listLoad();
  toDo.update(1, 1);
} catch (e) {
  console.log(e.message);
  //
}
sizeUpdate();

window.addEventListener("resize", sizeUpdate);
window.addEventListener("resize", masonryGridSizeUpdate);

elementAddEvent();

function elementAddEvent() {
  let list = todoList.getElementsByTagName("li");
  for (let i = 0; i < list.length; i++) {
    let element = list[i];
    let temp = element.getElementsByClassName("item-tool")[0].getElementsByTagName("i");
    let edit = temp.item(0);
    let del = temp.item(1);
    //let modal = new Modal("변경", createEditModal(toDo.getItem(i).content));
    let modal = new Modal("변경", createEditModal(""));

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
}

let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
  // 테스트
  let modal = new Modal("추가", createAddModal());
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

function createAddModal() {
  let label = document.createElement("label");
  label.setAttribute("for", "content");
  label.textContent = "내용";

  // let textarea = document.createElement("textarea");
  // textarea.id = "content";
  let textarea = document.createElement("div");
  textarea.id = "content";
  textarea.setAttribute("contenteditable","true");
  textarea.setAttribute("placeholder","입력 해주세요.");
  textarea.className = "content-box";
  label.appendChild(textarea);

  return label;
}

function createEditModal(content) {
  let label = document.createElement("label");
  label.setAttribute("for", "content");
  label.textContent = "내용";

  let textarea = document.createElement("textarea");
  textarea.id = "content";
  textarea.value = content;

  label.appendChild(textarea);

  return label;
}

function sizeUpdate() {
  let width = 250;
  let margin = 10;
  let innerWidth = window.innerWidth;
  let itemCount = Math.trunc(innerWidth / width);

  todoList.style.width = `${width * itemCount + margin * (itemCount - 1)}px`;
}

const grid = document.querySelector(".todo-list");
let gridStyle = getComputedStyle(grid);
let gridRow = parseInt(gridStyle.getPropertyValue("grid-auto-rows")) || 0;
let gridGap = parseInt(gridStyle.getPropertyValue("gap")) || 0;
let gridItem = grid.getElementsByClassName("todo-list-item");

window.addEventListener("resize", masonryGridSizeUpdate);
masonryGrid();

function masonryGrid() {
  for (let i = 0; i < gridItem.length; i++) {
    let item = gridItem.item(i);
    let rowEnd = Math.ceil(item.scrollHeight / (gridRow + gridGap));
    item.style.gridRowEnd = `span ${rowEnd}`;
  }
}

function masonryGridSizeUpdate() {
  let width = 250;

  let gridWidth = parseInt(grid.style.width) || 0;
  //let result = Math.trunc(window.screen.availWidth / width);
  let result = Math.trunc(gridWidth / width);

  //todoList.style.width = `${result + (10*result-1)}px`;
  grid.style.gridTemplateColumns = `repeat(${result},${width}px)`;
}

const select = document.querySelector(".select");
const selectValue = document.querySelector(".select-value");
const selectList = document.querySelector(".select-list");
const selectOptions = document.querySelectorAll(".option");
let optionClick = false;

const selectAvtive = function() {

  if(optionClick) {
    optionClick = false;
    select.addEventListener("mouseleave",selectAvtive);
  }

  if(select.classList.contains("active")) {
    select.classList.remove("active");
  }
  else {
    select.classList.add("active");
  }
}

select.addEventListener("mouseenter",selectAvtive,)
select.addEventListener("mouseleave",selectAvtive);

selectOptions.forEach((e)=>{
  e.addEventListener("click",() => {
    selectValue.textContent = e.textContent+"월";
    select.removeEventListener("mouseleave",selectAvtive);
    select.classList.remove("active");
    optionClick = true;
    toDo.update(e.textContent, 1);
  });
});
