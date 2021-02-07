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
  public myEmail : string = '';
  public name : string = '';
  

  constructor(private chatService: ChatService, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.targetEmail = params.get("email")
      this.name = params.get('name')
    })
    this.myEmail = localStorage.getItem('email');
    this.chatService.getMessages(this.targetEmail,this.myEmail).subscribe((res: Message[]) =>{
      this.messages = res;
      console.log(this.messages[0].dateHidden)
    })
    const myRoom = localStorage.getItem('room')
    this.chatService.LeaveRoom(myRoom)
    this.addroom()
    this.chatService.receiveRoom().subscribe((res: string) => {
      this.room = res;
      localStorage.setItem('room',res)
    })
    
    this.chatService.receiveChat().subscribe((res: any) => {
      const message = new Message();
      let today = new Date();
      let date = today.getHours() + ":" + today.getMinutes()+', '+(today.getMonth()+1)+'/'+today.getDate()+'/'+ today.getFullYear()
      message.date = date
      message.text = res.text;
      message.senderLocal = 'other';
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
    message.senderLocal = 'me';
    message.sender = this.myEmail;
    message.text = this.text;
    this.messages.push(message);
    this.chatService.sendChat({sender: message.sender, text: message.text, room: this.room, date: message.date});
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
    
    this.chatService.joinRoom({user1: this.myEmail, user2:this.targetEmail});
  }

}
