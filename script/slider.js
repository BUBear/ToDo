export class Slider {
    constructor(size) {
        this._slider = document.querySelector(".slider");
        this._sliderInner = document.querySelector(".slider-inner");
        this._sliderItemList = this._sliderInner.getElementsByTagName("div");
        this._index = 0;
        this._currentInnerPos = 0;
        this._oldInnerPos = 0;
        this._itemSize = 50;
        this._innerSize = this._itemSize * (this._sliderItemList.length-1);
        this._currentMousePos = 0;
        this._state = "normal";

        this._slider.addEventListener("mousedown", (e) => {
            e.preventDefault();
            this._state = "down";
            this._currentMousePos = e.x;
        });

        this._slider.addEventListener("mousemove", (e) => {
            e.preventDefault();
            if(this._state == "down" || this._state == "move") {
                this._sliderMove(this._currentInnerPos + (e.x - this._currentMousePos));
                this._state = "move";

                if(this._currentInnerPos + (e.x - this._currentMousePos) < -(this._itemSize*(this._index + 1)+(4*this._index))) {
                    this._index++;
                    this._itemUpdate(this._index);
                    this._slider.dispatchEvent(new CustomEvent("slidechange",{
                        detail: {index : this._index}
                    }));
                }
                else if(this._currentInnerPos + (e.x - this._currentMousePos) > -(this._itemSize*(this._index)-25)) {
                    if(this._index != 0)
                    {
                        this._index--;
                        this._itemUpdate(this._index);
                        this._slider.dispatchEvent(new CustomEvent("slidechange",{
                            detail: {index : this._index}
                        }));
                    }
                }
                //-(this._itemSize*(this._index)-(4*this._index))
                //console.log(this._currentInnerPos + (e.x - this._currentMousePos) + " " + -(this._itemSize*(this._index)-20));
            }
        });

        this._slider.addEventListener("mouseup", (e) => {
            e.preventDefault();
            this._state = "normal";
            //this._currentInnerPos = this._currentInnerPos + (e.x - this._currentMousePos);
            this.sliderMoveTo(this._index);
            // if(this._currentInnerPos >= 0) {
            //     this._sliderMove(0);
            //     this._currentInnerPos = 0;
            // }
            // else if(this._sliderPos() > -this._innerSize) {
            //     this._sliderMove(-(this._innerSize));
            //     this._currentInnerPos = -(this._innerSize);
            // }
            //console.log(this._currentInnerPos + " " + (this._currentInnerPos + (e.x - this._currentMousePos)) + " " + (this._itemSize*(this._index + 1)));
        });

        this._slider.addEventListener("mouseleave", (e) => {
            e.preventDefault();
            if(this._state == "move")
            {
                this._sliderResetPos();
            }
            this._state = "normal";
        });
    }

    addChangeEvent(event) {
        this._slider.addEventListener("slidechange",event);
    }

    _sliderMove(pos) {
        this._sliderInner.style.transform = `translateX(${pos}px)`;
    }

    sliderMoveTo(index) {
        this._index = index;
        let move = (this._itemSize * (this._index)) + (4 * (this._index+1)) + 2;
        this._sliderMove(-move);
        this._itemUpdate(this._index);
        this._currentInnerPos = -move;
    }

    _sliderPos() {
        let slider = this._slider.getBoundingClientRect();
        let inner = this._sliderInner.getBoundingClientRect();

        return slider.left - inner.left + this._itemSize;
    }

    _itemUpdate(index) {
        if(index == 0) {
            this._sliderItemList[index + 1].classList.remove("active");
            this._sliderItemList[index].classList.add("active");
        }
        else if(index == this._sliderItemList.length - 1) {
            this._sliderItemList[index-1].classList.remove("active");
            this._sliderItemList[index].classList.add("active");
        }
        else {
            this._sliderItemList[index-1].classList.remove("active");
            this._sliderItemList[index+1].classList.remove("active");
            this._sliderItemList[index].classList.add("active");
        }
    }

    _sliderResetPos() {
        let move = (this._itemSize * this._index) + (4 * (this._index + 1)) + 2;
        this._sliderMove(-move);
        this._currentInnerPos = -move;
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

