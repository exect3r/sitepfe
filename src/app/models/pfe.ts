export class Pfe {
    _id: string;
    name: string;
    description: string;
    student: string;
    supervisor: string;
    tasks: string[];

    constructor(_id: string, name: string, description: string, student: string, supervisor: string, tasks: string[]) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.student = student;
        this.supervisor = supervisor;
        this.tasks = tasks;
    }
}
