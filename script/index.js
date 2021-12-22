window.onload = () => {

    let a = document.getElementById("a");

    let slider = document.querySelector(".slider");
    let sliderInner = document.querySelector(".slider-inner");
    let sliderList = document.querySelectorAll(".slider-item");
    let down = false;
    let downPoint = {};
    let defaultValue = 50;
    let centerValue = defaultValue/2;
    let lastSliderInnerPos = 50;
    let index = 0;

    slider.addEventListener("mousedown", function (e) {
        down = true;
        downPoint.x = e.x;
    });

    slider.addEventListener("mousemove", function (e) {
        e.preventDefault();
        
        if(down) {
            sliderMove(lastSliderInnerPos + (e.x - downPoint.x));
            
            a.innerHTML = `x ${defaultValue + (e.x - downPoint.x)}<br>
            inner ${sliderInner.offsetLeft} <br>
            slider ${slider.offsetLeft} <br>
            last ${lastSliderInnerPos} <br>
            inner - slider ${sliderInner.offsetLeft - slider.offsetLeft} <br>`;
        }
    });

    function sliderMove(pos) {
        sliderInner.style.left = `${pos}px`;
    }

    function sliderMoveTo(currentX, startX) {
        let pos = 0;
        if(defaultValue - centerValue > defaultValue + (currentX - startX)) {
            pos = lastSliderInnerPos - defaultValue;
            index++;
        }
        else if(defaultValue + centerValue < defaultValue + (currentX - startX)) {
            pos = lastSliderInnerPos + defaultValue;
            index--;
        }
        else {
            pos = lastSliderInnerPos;
        }
        lastSliderInnerPos = pos;
        sliderInner.style.left = `${lastSliderInnerPos}px`;
    }
    
    slider.addEventListener("mouseup", function (e) {
        down = false;
    
        sliderMoveTo(e.x,downPoint.x);
        
        // if(centerValue-defaultValue/2 > currentItemPos) {
        //     lastSliderInnerPos -= defaultValue;
        //     sliderInner.style.left = `${lastSliderInnerPos}px`;
        //     index++;
        // }
        // else if(centerValue+defaultValue/2 < currentItemPos) {
        //     //lastSliderInnerPos += defaultValue;
        //     //sliderInner.style.left = `${lastSliderInnerPos}px`;
        //     //index--;
        // }
        // else {
        //     sliderInner.style.left = `${lastSliderInnerPos}px`;
        // }

        a.innerHTML = `x ${defaultValue + (e.x - downPoint.x)}<br>
        inner ${sliderInner.offsetLeft} <br>
        slider ${slider.offsetLeft} <br>
        last ${lastSliderInnerPos} <br>
        inner - slider ${sliderInner.offsetLeft - slider.offsetLeft} <br>`;

    });

    slider.addEventListener("mouseleave", function (e) {
        down = false;
    });
    
}