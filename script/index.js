window.onload = () => {

    let a = document.getElementById("a");

    let slider = document.querySelector(".slider");
    let sliderInner = document.querySelector(".slider-inner");
    let sliderList = document.querySelectorAll(".slider-item");
    let down = false;
    let point = {};
    let list = {};
    var last = 0;
    let start = 50;
    let index = 0;

    function getItemPos() {
        sliderList.forEach((v, k) => {
            list[k] = v.getBoundingClientRect();
        })
    }

    slider.addEventListener("mousedown", function (e) {
        down = true;
        point.x = e.x;
    });

    slider.addEventListener("mousemove", function (e) {
        e.preventDefault();
        if(down) {
            sliderInner.style.left = `${last + (e.x - point.x)}px`;
            a.innerHTML = `${point.x}<br>
            e.x ${e.x} <br>
            e.x - point.x ${e.x - point.x} <br>
            last ${last} <br>
            last + e.x - point.x ${last + e.x - point.x} <br>
            left ${sliderInner.style.left} <br>
            list ${list[0].left} <br>`;
        }
    });
    
    slider.addEventListener("mouseup", function (e) {
        down = false;
        last = parseInt(sliderInner.style.left.replace("px","")) || 50;
        // if(last > start/2) {
        //     sliderInner.style.left = `${start}px`;
        //     last = start;
        // }
        // else {
        //     last = start-50;
        //     sliderInner.style.left = `${start-50}px`;
        //     start = last;
        // }
        getItemPos();
        a.innerHTML = `${point.x}<br>
            e.x ${e.x} <br>
            e.x - point.x ${e.x - point.x} <br>
            last ${last} <br>
            last + e.x - point.x ${last + e.x - point.x} <br>
            left ${sliderInner.style.left} <br>
            list ${list[0].left} <br>`;
    });

    slider.addEventListener("mouseleave", function (e) {
        down = false;
        last = parseInt(sliderInner.style.left.replace("px",""));
    });

    function setIndex(currentPos) {
        if(currentPos < currentIndexPos/2) {
            index++
        }
    }

    function sliderMove(pos) {
        sliderInner.style.left = pos;
        lastPos = parseInt(sliderInner.style.left.replace("px",""));
        if(lastPos > currentIndexPos/2) {

        }
    }

    function sliderLastMove(sliderInfo) {
        if(last > start) {
            sliderInner.style.left = `${start}px`;
            last = start;
        }
        else {
            last = start-50;
            sliderInner.style.left = `${start-50}px`;
            start = last;
        }
        return { index: index}
    }
    
}