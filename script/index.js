import { Slider } from "./slider.js"

window.onload = () => {

    let slider = new Slider(document.querySelector(".slider"),
    document.querySelector(".slider-inner"),
    document.querySelectorAll(".slider-item"));

    
    // let a = document.getElementById("a");

    // let slider = document.querySelector(".slider");
    // let sliderInner = document.querySelector(".slider-inner");
    // let sliderItemList = document.querySelectorAll(".slider-item");
    // let down = false;
    // let downPoint = {};
    // let defaultValue = sliderItemList[0].clientWidth;
    // let centerValue = defaultValue/2;
    // let currentItem = { index:0, pos:defaultValue};
    // let lastSliderInnerPos = defaultValue;
    // let index = 0;

    // slider.addEventListener("mousedown", function (e) {
    //     down = true;
    //     downPoint.x = e.x;
    // });

    // slider.addEventListener("mousemove", function (e) {
    //     e.preventDefault();
        
    //     if(down) {
    //         sliderMove(lastSliderInnerPos + (e.x - downPoint.x));
    //     }
    // });

    // slider.addEventListener("mouseup", function (e) {
    //     down = false;
    
    //     sliderMoveTo(e.x,downPoint.x);
    // });

    // slider.addEventListener("mouseleave", function (e) {
    //     down = false;
    //     sliderMoveTo(e.x,downPoint.x);
    // });

    // function isLast() {
    //     if(index < 0 || index > sliderItemList.length-1) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    // function sliderMove(pos) {
    //     sliderInner.style.left = `${pos}px`;
    // }

    // function sliderMoveTo(currentX, startX) {
    //     let pos = 0;

    //     if(defaultValue - centerValue > defaultValue + (currentX - startX)) {
    //         pos = lastSliderInnerPos - defaultValue;
    //         index++;
    //     }
    //     else if(defaultValue + centerValue < defaultValue + (currentX - startX)) {
    //         pos = lastSliderInnerPos + defaultValue;
    //         index--;
    //     }
    //     else {
    //         pos = lastSliderInnerPos;
    //     }
    //     if(isLast()) {
    //         index = currentItem.index;
    //         pos = currentItem.pos;
    //     }

    //     lastSliderInnerPos = pos;

    //     (currentItem = {pos, index});
        
    //     sliderInner.style.left = `${lastSliderInnerPos}px`;
    // }
    
}