export class ToDo 
{
    constructor(window) {
        this.local = window.localStorage;
        this.toDoList = [];
    }

    getItem(index) {
        return this.toDoList[index];
    }

    setItem(data) {
        if(data instanceof ToDoList) {
            this.toDoList[this.toDoList.length - 1] = data;
        }
        else {
            throw Error("ToDoList 타입이 아닙니다.")
        }
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