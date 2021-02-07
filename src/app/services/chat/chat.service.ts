import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl = 'http://localhost:3000/chat'
  constructor(private socket: Socket, private http: HttpClient) { 

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

  joinRoom(payload: any){
    this.socket.emit('joinRoom',payload);
  }

  LeaveRoom(room: string){
    console.log(room)
    this.socket.emit('leaveRoom',room);
  }

  receiveRoom(){
    return this.socket.fromEvent('roomJoined');
  }

  getMessages(user1:string, user2:string){
    return this.http.post(this.baseUrl+'/messages', {user1: user1, user2:user2});
  }
}
