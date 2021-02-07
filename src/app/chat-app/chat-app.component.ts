import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../models/message';
import { ChatService } from '../services/chat/chat.service';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  public users: number = 0;
  public messages: Message[] = [];
  public text: string = '';
  public room: string = '';
  public targetEmail : string = '';
  

  constructor(private chatService: ChatService, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.targetEmail = params.get("email")
    })
    console.log(this.targetEmail)
    this.chatService.receiveChat().subscribe((res: any) => {
      const message = new Message();
      let today = new Date();
      let date = today.getHours() + ":" + today.getMinutes()+', '+(today.getMonth()+1)+'/'+today.getDate()+'/'+ today.getFullYear()
      message.date = date
      message.text = res.text;
      message.sender = 'other';
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });

  }

  addChat(){
    const message = new Message();
    let today = new Date();
    let date = today.getHours() + ":" + today.getMinutes()+', '+(today.getMonth()+1)+'/'+today.getDate()+'/'+ today.getFullYear()
    message.date = date
    message.sender = 'me';
    message.text = this.text;
    this.messages.push(message);
    this.chatService.sendChat({sender: message.sender, text: message.text, room: this.room});
    this.text = ''
    let myDiv = document.getElementById("chat");
    setTimeout(() => {
      myDiv.scroll({
        top: 2000,
        left : 0,
        behavior: 'smooth'
      })
    }, 50);
    
  }

  showDate(message){
    if(message.dateHidden == false){
    message.dateHidden = true;}
    else{
    message.dateHidden = false;
    }
  }
  addroom(){
    console.log(this.room);
    this.chatService.joinRoom(this.room);
  }

}
