import { Moment } from "moment";

export class Message {
    text : string;
    sender: string;
    date: string;
    dateHidden: boolean;
    

    constructor(){
        this.dateHidden = true;
    }
}
