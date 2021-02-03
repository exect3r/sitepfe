export class Staff {
    id : number;
    name : string;
    phone : number;
    position : string;
    email : string;

    constructor(id,name,email,phone,position){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.position = position;
    }
}
