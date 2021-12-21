window.onload = () => {

    let a = document.getElementById("a");

    let slider = document.querySelector(".slider");
    let sliderInner = document.querySelector(".slider-inner");
    let sliderList = document.querySelectorAll(".slider-item");
    let down = false;
    let downPoint = {};
    let defaultValue = 50;
    let lastSliderInnerPos = defaultValue;
    let list = {};

    console.log(slider.getClientRects())
    console.log(sliderInner.offsetLeft)
    function getItemPos() {
        sliderList.forEach((v, k) => {
            list[k] = v.getBoundingClientRect();
        })
    }

    slider.addEventListener("mousedown", function (e) {
        down = true;
    });

    slider.addEventListener("mousemove", function (e) {
        e.preventDefault();
        if(down) {
            
        }

    });
    
    slider.addEventListener("mouseup", function (e) {
        down = false;

    });

    slider.addEventListener("mouseleave", function (e) {
        down = false;
        inner = parseInt(sliderInner.style.left.replace("px",""));
    });
    
}