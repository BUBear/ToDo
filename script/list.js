export class ToDo 
{
    constructor(element,stroage) {
        this.element = element;
        this.local = stroage;
        this.toDoList = [];
    }

    getItem(index) {
        return this.toDoList[index];
    }

    addItem(doList) {
        if(doList instanceof ToDoList) {
            this.toDoList[this.toDoList.length] = doList;
        }
        else {
            throw Error("ToDoList 타입이 아닙니다.");
        }
    }

    removeItem(index) {
        this.toDoList.splice(index,1);
    }

    itemUpdate(index, content) {
        this.getItem(index).content = content;
    }

    update(month, day) {
        this.resetItme();

        this.toDoList.forEach(v => {
            if(v.month == month && v.day == day) {
                this.createItem(v);
            }
        });

        //this.createAddElement();
    }

    createItem(doList, editEvent, delEvent) {
        let itemE = document.createElement("li");
        itemE.classList.add("todo-list-item");

        // let titleE = document.createElement("div");
        // titleE.classList.add("item-title");
        // titleE.textContent = doList.title;
        // itemE.appendChild(titleE);

        let contentE = document.createElement("div");
        contentE.classList.add("item-content");
        contentE.textContent = doList.content;
        itemE.appendChild(contentE);

        let toolE = document.createElement("div");
        toolE.classList.add("item-tool");
        
        let editE = document.createElement("i");
        editE.classList.add("far");
        editE.classList.add("fa-edit");
        editE.addEventListener("click",editEvent);

        let delE = document.createElement("i");
        delE.classList.add("far");
        delE.classList.add("fa-trash-alt");
        delE.addEventListener("click",delEvent);

        toolE.appendChild(editE);
        toolE.appendChild(delE);
        itemE.appendChild(toolE);

        this.element.appendChild(itemE);
    }

    createAddElement() {
        let addListE = document.createElement("li");
        addListE.className = "todo-list-item-add";
        
        let divE = document.createElement("div");
        divE.className = "item-add";

        let addE = document.createElement("i");
        addE.className = "fas fa-3x fa-plus";

        divE.appendChild(addE);

        addListE.appendChild(divE);

        this.element.appendChild(addListE);
    }

    resetItme() {
        let elements = this.element.getElementsByTagName("li");
        while(elements.length != 0) {
            elements[0].remove();
        }
    }

    listLoad() {
        let data = this.local.getItem("todolist");
        if(data != null) {
            let convertData = JSON.parse(data);
            this.toDoList = convertData;
        }
        else {
            throw Error("저장된 리스트가 없습니다.");
        }
    }
    
    listSave() {
        try {
            this.local.setItem("todolist",JSON.stringify(this.toDoList));
        }
        catch (e) {
            console.error(e);
        }
    }
}

export class ToDoList {
    constructor(month, day, title, content, date) {
        this._month = month;
        this._day = day;
        this._title = title;
        this._content = content;
        this._date = date;
    }

    get month() {
        return this._month;
    }

    set month(month) {
        this._month = month;
    }

    get day() {
        return this._day;
    }

    set day(day) {
        this._day = day;
    }
    
    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get content() {
        return this._content;
    }

    set content(content) {
        this._content = content;
    }

    get date() {
        return this._date;
    }

    set date(date) {
        this._date = date;
    }
}