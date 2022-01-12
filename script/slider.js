export class Slider {
    constructor() {
        this._slider = document.querySelector(".slider");
        this._sliderInner = document.querySelector(".slider-inner");
        this._sliderItem = this._sliderInner.getElementsByTagName("div");
        this._index = 0;
        this._innerPos = 0;
        this._itemSize = 0;
        this._currentMousePos = 0;
        this._state = "normal";

        this._slider.addEventListener("mousedown", (e) => {
            this._state = "down";
            this._currentMousePos = this._innerPos + e.x;
            console.log(this._innerPos + " " + this._currentMousePos + " " + e.x + " " + (e.x-this._currentMousePos));
        });

        this._slider.addEventListener("mousemove", (e) => {
            e.preventDefault();
            if(this._state == "down" || this._state == "move") {
                this.sliderMove(this._innerPos + (e.x - this._currentMousePos));
                this._state = "move";
                console.log(this._innerPos + " " + this._currentMousePos + " " + e.x + " " + (e.x-this._currentMousePos));
            }
        });

        this._slider.addEventListener("mouseup", (e) => {
            this._state = "normal";
            this._innerPos = e.x - this._currentMousePos;
            console.log(this._innerPos + " " + this._currentMousePos + " " + e.x + " " + (e.x-this._currentMousePos));
        });
    }

    sliderMove(pos) {
        this._sliderInner.style.transform = `translateX(${pos}px)`;
    }
}



// export class Slider {
//     constructor(sliderEl, sliderInner, sliderItemList) {
//         this.slider = this;
//         this.sliderEl = sliderEl;
//         this.sliderInner = sliderInner;
//         this.sliderItemList = sliderItemList;
//         this.moveState = false;
//         this.currentPoint = 0;
//         this.defaultSize = 50;
//         this.centerValue = this.defaultSize / 2;
//         this.currentItem = { index: 0, pos: this.defaultSize };
//         this.endSliderInnerPos = this.defaultSize;

//         sliderEl.addEventListener("mousedown", (e) => {
//             this.moveState = true;
//             this.currentPoint = e.x;
//         });

//         sliderEl.addEventListener("mousemove", (e) => {
//             e.preventDefault();

//             if (this.moveState) {
//                 this.sliderMove(this.endSliderInnerPos + (e.x - this.currentPoint));
//             }
//         });

//         sliderEl.addEventListener("mouseup", (e) => {
//             this.moveState = false;
//             this.sliderMoveTo(e.x, this.currentPoint); 
//             this.itemUpdate(this.currentItem.index);
//         });
//     }

//     itemUpdate(index) {
//         if(index == 0) {
//             this.sliderItemList[index+1].classList.remove("active");
//             this.sliderItemList[index].classList.add("active");
//         }
//         else if(index == this.sliderItemList.length - 1) {
//             this.sliderItemList[index-1].classList.remove("active");
//             this.sliderItemList[index].classList.add("active");
//         }
//         else {
//             this.sliderItemList[index-1].classList.remove("active");
//             this.sliderItemList[index+1].classList.remove("active");
//             this.sliderItemList[index].classList.add("active");
//         }
//     }

//     isLast() {
//         if (this.currentItem.index < 0 || this.currentItem.index > this.sliderItemList.length - 1) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     sliderMove(pos) {
//         this.sliderInner.style.left = `${pos}px`;
//     }

//     sliderMoveTo(currentX, startX) {
//         let temp = Object.assign({},this.currentItem);

//         if (this.defaultSize - this.centerValue > this.defaultSize + (currentX - startX)) {
//             this.currentItem.pos = this.endSliderInnerPos - this.defaultSize;
//             this.currentItem.index++;
//         }
//         else if (this.defaultSize + this.centerValue < this.defaultSize + (currentX - startX)) {
//             this.currentItem.pos = this.endSliderInnerPos + this.defaultSize;
//             this.currentItem.index--;
//         }
//         else {
//             this.currentItem.pos = this.endSliderInnerPos;
//         }
//         if (this.isLast()) {
//             this.currentItem = temp;
//         }

//         this.endSliderInnerPos = this.currentItem.pos;

//         this.sliderMove(this.endSliderInnerPos);
//     }
// }

