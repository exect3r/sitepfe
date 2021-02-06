import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pfe } from 'src/app/models/Pfe';

@Injectable({
  providedIn: 'root'
})
export class PfesService {

  constructor(private http: HttpClient) { }

  getPfeByStudent(sid: string): Observable<Object> {
    return this.http.get("http://localhost:3000/pfe/student/" + sid);;
  }
  
  getPfes() : Observable<Object> {
    return this.http.get("http://localhost:3000/pfe");
  }

  createPfe(pfe: Pfe) {
    return this.http.post("http://localhost:3000/pfe/", pfe).subscribe();
  }

  updatePfe(pfe: Pfe) {
    return this.http.put("http://localhost:3000/pfe/" + pfe._id, pfe).subscribe();
  }

  deletePfe(pfe: Pfe) {
    return this.http.delete("http://localhost:3000/pfe/" + pfe._id).subscribe();
  }
}
