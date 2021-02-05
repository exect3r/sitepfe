import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../models/professors';

const PROF_API = 'https://immense-citadel-91115.herokuapp.com/api/personness/';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  professors: Professor[] = [];
  constructor(private http: HttpClient) {
    this.professors = [
      new Professor(
        0,
        'robanna',
        'robanna@insat.com',
        123456,
        'info',
        'fulltime'
      ),
      new Professor(
        1,
        'sellaouti',
        'sellaouti@insat.com',
        123,
        'info',
        'associate'
      ),
    ];
  }

  getFProfessor(): Professor[] {
    return this.professors;
  }

  getProfessor(): Observable<Professor[]> {
    return this.http.get<Professor[]>(PROF_API);
  }

  addProf(prof: Professor): Observable<Professor> {
    return this.http.post<Professor>(PROF_API, prof);
  }
}
