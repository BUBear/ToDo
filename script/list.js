export class DoList {
    constructor(month, day, title, content, date) {
        this.month = month;
        this.day = day;
        this.title = title;
        this.content = content;
        this.date = date;
    }

    get month() {
        return this.month;
    }

    set month(month) {
        this.month = month;
    }
}