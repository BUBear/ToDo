export class Modal {
    constructor(title, content) {
        this.title = title;
        this.content = content;
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
        modalTitle.textContent = this.title;
    
        let modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        if(this.content instanceof Element) {
            modalBody.appendChild(this.content);
        }
        else {
            modalBody.textContent = this.content;
        }
    
        let modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        
        let close = document.createElement("i");
        close.className = "fas fa-lg fa-times";
        close.addEventListener("click",() => { this.close(); });

        this.closeElement = close;

        let accept = document.createElement("i");
        accept.className = "fas fa-lg fa-check";

        this.acceptElement = accept;
    
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
            document.body.appendChild(this.modal);
            this.modal.classList.add("show");
        }
    }

    close() {
        if(this.modal != null) {
            this.modal.remove();
            this.modal = null;
        }
    }

    addCloseEvnet(evnetName, event) {
        evnetName = null || "click";
        this.closeElement.addEventListener(evnetName, event);
    }

    addAcceptEvent(evnetName, elementsId, event) {
        evnetName = null || "click";
        let elements = null;
        if(elementsId) {
            elements = this.getElements(elementsId);
        }
        this.acceptElement.addEventListener(evnetName, event(elements));
    }

    getElements(ids) {
        let elements = {};
        if(ids != null) {
            ids.forEach(element => {
                elements[element] = document.getElementById(element);
            });
        }

        return elements;
    }
}

export class AddModal extends Modal {
    constructor(title) {
        super(title);
        this.createAddModal();
    }

    createAddModal() {
        let body = this.modal.getElementsByClassName("modal-body")[0];
        let textarea = document.createElement("div");
        textarea.contentEditable = true;
        textarea.id = "a";

        body.appendChild(textarea);
    }
}