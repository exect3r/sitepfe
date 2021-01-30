export class Student {
    numIns : number;
    name : string;
    section : string;
    email : string;
    phone : string;

    constructor(numIns,name,section,email,phone){
        this.numIns = numIns;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.section = section;
    }
}
