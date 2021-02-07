export class Task {
    _id: string;
    name: string;
    description: string;
    dateStart: Date;
    dateEnd: Date;
    status: string;
    progress: Number;

    constructor(_id: string, name: string, description: string, dateStart: Date, dateEnd: Date, status: string, progress: Number) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.status = status;
        this.progress = progress;
    }
}
