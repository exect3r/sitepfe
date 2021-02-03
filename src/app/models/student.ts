export class Student {
    numIns : number;
    name : string;
    section : string;
    email : string;
    phone : string;
    taskIds : [];

    constructor(numIns,name,section,email,phone,taskIds){
        this.numIns = numIns;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.section = section;
        this.taskIds = taskIds;
    }
}
