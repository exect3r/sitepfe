import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {
  baseUrl = 'http://localhost:3000/users'

  constructor(private httpclient: HttpClient) { }

  getProfessors(){
    return this.httpclient.get(this.baseUrl+'/professors');
  }

  getProfessorById(id: string) {
    return this.httpclient.get(this.baseUrl + '/professors/' + id);
  }
}
