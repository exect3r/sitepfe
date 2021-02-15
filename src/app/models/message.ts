import { Moment } from "moment";

export class Message {
    text : string;
    sender: string;
    date: string;
    dateHidden: boolean;
    senderLocal:string
    

    constructor(){
        this.dateHidden = true;
    }
}
