export { Slider };

class Slider {
    constructor(sliderEl, sliderInner, sliderItemList) {
        this.slider = this;
        this.sliderEl = sliderEl;
        this.sliderInner = sliderInner;
        this.sliderItemList = sliderItemList;
        this.moveState = false;
        this.currentPoint = 0;
        this.defaultSize = 50;
        this.centerValue = this.defaultSize / 2;
        this.currentItem = { index: 0, pos: this.defaultSize };
        this.endSliderInnerPos = this.defaultSize;

        sliderEl.addEventListener("mousedown", (e) => {
            this.moveState = true;
            this.currentPoint = e.x;
        });

        sliderEl.addEventListener("mousemove", (e) => {
            e.preventDefault();

            if (this.moveState) {
                this.sliderMove(this.endSliderInnerPos + (e.x - this.currentPoint));
            }
        });

        sliderEl.addEventListener("mouseup", (e) => {
            this.moveState = false;
            this.sliderMoveTo(e.x, this.currentPoint); 
        });
    }

    isLast() {
        if (this.currentItem.index < 0 || this.currentItem.index > this.sliderItemList.length - 1) {
            return true;
        }
        else {
            return false;
        }
    }

    sliderMove(pos) {
        this.sliderInner.style.left = `${pos}px`;
    }

    sliderMoveTo(currentX, startX) {
        let temp = Object.assign({},this.currentItem);

        if (this.defaultSize - this.centerValue > this.defaultSize + (currentX - startX)) {
            this.currentItem.pos = this.endSliderInnerPos - this.defaultSize;
            this.currentItem.index++;
        }
        else if (this.defaultSize + this.centerValue < this.defaultSize + (currentX - startX)) {
            this.currentItem.pos = this.endSliderInnerPos + this.defaultSize;
            this.currentItem.index--;
        }
        else {
            this.currentItem.pos = this.endSliderInnerPos;
        }
        if (this.isLast()) {
            this.currentItem = temp;
        }

        this.endSliderInnerPos = this.currentItem.pos;

        this.sliderMove(this.endSliderInnerPos);
    }
}

