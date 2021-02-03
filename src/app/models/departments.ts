export class Department {
    id : number;
    name : string ; 
    email : string ; 
    phone : number; 
    head : string ;


    constructor(id,name,email,phone,head){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.head = head;
    }
}
