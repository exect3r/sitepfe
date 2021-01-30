import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professors' ; 

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professors : Professor[] = [];
  constructor() { }

  ngOnInit(): void {
    this.professors = [
      new Professor(0,'robanna','robanna@insat.com',123456,'info','fulltime'),
      new Professor(1,'sellaouti','sellaouti@insat.com',123,'info','associate')
    ]
  }

}
