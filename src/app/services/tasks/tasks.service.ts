import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasks() : Observable<Object> {
    return this.http.get("http://localhost:3000/tasks");
  }

  createTask(task: Task) {
    return this.http.post("http://localhost:3000/tasks/", task).subscribe();
  }

  updateTask(task: Task) {
    return this.http.put("http://localhost:3000/tasks/" + task._id, task).subscribe();
  }

  deleteTask(task: Task) {
    return this.http.delete("http://localhost:3000/tasks/" + task._id).subscribe();
  }
}
