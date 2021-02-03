export class Events {
    id : number;
    profId : number;
    studentId : number;
    eventTitle : string;
    eventDate : Date;

    constructor(id,profId,studentId,eventTitle,eventDate){
        this.id = id;
        this.profId = profId;
        this.studentId = studentId;
        this.eventTitle = eventTitle;
        this.eventDate = eventDate;
    }
}
