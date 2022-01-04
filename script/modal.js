export class Modal {
    constructor(modals, show, hide) {
        this.modalList = modals;
        this.currentModal = null;
        this.showCss = show;
        this.hideCss = hide;
    }

    show(id) {
        this.modalList.forEach(v => {
            if(v.id == id) {
                modal.classList.toggle(this.showCss);
                this.currentModal = modal;
            }
        });
    }

    hide() {
        currentModal.classList.toggle(this.hideCss);
        this.currentModal = null;
    }
}