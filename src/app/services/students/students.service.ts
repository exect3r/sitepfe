import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Object> {
    return this.http.get("http://localhost:3000/users/students");
  }

  getStudentById(id: string): Observable<Object> {
    return this.http.get("http://localhost:3000/users/students/" + id);
  }
}
