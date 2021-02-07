import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { 

  }

  sendChat(message){
    this.socket.emit('chat', message);
  }

  receiveChat(){
    return this.socket.fromEvent('chat');
  }

  getUsers(){
    return this.socket.fromEvent('users');
  }

  joinRoom(room){
    this.socket.emit('joinRoom',room);
  }

  LeaveRoom(room){
    this.socket.emit('leaveRoom',room);
  }
}
