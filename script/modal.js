export class Modal {
    constructor() {
        this.modal = null;
        this.closeElement = null;
        this.acceptElement = null;

        this.createModal();
    }

    createModal() {
        let modal = document.createElement("div");
        modal.className = "modal";
    
        let modalBack = document.createElement("div");
        modalBack.className = "modal-back";
    
        let modalInner = document.createElement("div");
        modalInner.className = "modal-inner";
    
        let modalTitle = document.createElement("div");
        modalTitle.className = "modal-title";
    
        let modalBody = document.createElement("div");
        modalBody.className = "modal-body";
    
        let modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        
        let close, accept = document.createElement("i");
        close.className = "fas fa-lg fa-times";
        accept.className = "fas fa-lg fa-check";
    
        modalFooter.appendChild(close);
        modalFooter.appendChild(accept);
    
        modalInner.appendChild(modalTitle);
        modalInner.appendChild(modalBody);
        modalInner.appendChild(modalFooter);
    
        modal.appendChild(modalBack);
        modal.appendChild(modalInner);
    
        this.modal = modal;
    }

    show() {
        if(this.modal != null) {
            this.modal.classList.add("show");
        }
    }

    close() {
        if(this.modal != null) {
            this.modal.remove();
        }
    }

    // show(id) {
    //     let temp = id.indexOf("#");
    //     if(temp != -1 && temp == 0) {
    //         id = id.replace("#","");
    //     }
    //     this.modalList.forEach(v => {
    //         if(v.id == id) {
    //             v.classList.toggle(this.showCss);
    //             this.currentModal = v;
    //         }
    //     });
    // }

    // hide() {
    //     currentModal.classList.toggle(this.hideCss);
    //     this.currentModal = null;
    // }
}

class AddModal extends Modal {
    constructor() {
        super();
        createAddModal();
    }

    createAddModal() {
        let body = this.modal.getElementsByClassName(".modal-body");
        let textarea = document.createElement("div");
        textarea.contentEditable = true;

        body.appendChild(textarea);
    }
}