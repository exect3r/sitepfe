export class Task {
    name: string;
    description: string;
    dateStart: Date;
    dateEnd: Date;
    status: string;
    progress: Number;

    constructor(name: string, description: string, dateStart: Date, dateEnd: Date, status: string, progress: Number) {
        this.name = name;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.status = status;
        this.progress = progress;
    }
}
