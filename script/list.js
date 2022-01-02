export class ToDo 
{
    constructor(element,stroage) {
        this.element = element;
        this.local = stroage;
        this.toDoList = {
            month: undefined, item: {
                day:undefined, list: {
                    title:title,
                    content:content,
                    date:date
                }
            }
        }
    }

    getItem(index) {
        return this.toDoList[index];
    }

    addItem(doList) {
        if(doList instanceof ToDoList) {
            this.toDoList[this.toDoList.length] = doList;
            this.createItem(doList);
        }
        else {
            throw Error("ToDoList 타입이 아닙니다.")
        }
    }

    createItem(doList) {
        let itemE = document.createElement("li");
        itemE.classList.add("todo-list-item");

        let titleE = document.createElement("div");
        titleE.classList.add("item-title");
        titleE.textContent = doList.title;
        itemE.appendChild(titleE);

        let contentE = document.createElement("div");
        contentE.classList.add("item-content");
        contentE.textContent = doList.content;
        itemE.appendChild(contentE);

        let toolE = document.createElement("div");
        toolE.classList.add("item-tool");
        
        let editE = document.createElement("i");
        editE.classList.add("far");
        editE.classList.add("fa-edit");

        let delE = document.createElement("i");
        delE.classList.add("far");
        delE.classList.add("fa-trash-alt");

        toolE.appendChild(editE);
        toolE.appendChild(delE);
        itemE.appendChild(toolE);

        this.element.appendChild(itemE);
    }

    listLoad() {
        let data = this.local.getItem("todolist");
        let convertData = JSON.parse(data);

        return convertData;
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