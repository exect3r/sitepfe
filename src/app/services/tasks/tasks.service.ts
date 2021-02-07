import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { Pfe } from 'src/app/models/pfe';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getTasksByPfe(pfe: Pfe): Observable<Object> {
    return new Observable(s => {
      pfe.tasks.forEach(async task => s.next(await this.getTask(task)));
    });
  }

  getTask(id: string): Observable<Object> {
    return this.http.get("http://localhost:3000/tasks/" + id);
  }

  getTasks() : Observable<Object> {
    return this.http.get("http://localhost:3000/tasks");
  }

  createTask(task: Task) : Observable<Object> {
    return this.http.post("http://localhost:3000/tasks/", task);
  }

  updateTask(task: Task) {
    return this.http.put("http://localhost:3000/tasks/" + task._id, task).subscribe();
  }

  deleteTask(task: Task) {
    return this.http.delete("http://localhost:3000/tasks/" + task._id).subscribe();
  }
}
