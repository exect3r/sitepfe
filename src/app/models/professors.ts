export class Professor {
    id : number;
    name : string ; 
    email : string ; 
    phone : number; 
    department : string ;
    position : string; 

    constructor(id,name,email,phone,department,position){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.department = department;
        this.position = position;
    }
}
