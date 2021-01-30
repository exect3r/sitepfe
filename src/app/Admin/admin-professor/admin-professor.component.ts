import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../script.service'
import { Professor } from 'src/app/models/professors' ;

@Component({
  selector: 'app-admin-professor',
  templateUrl: './admin-professor.component.html',
  styleUrls: ['./admin-professor.component.css']
})
export class AdminProfessorComponent implements OnInit {
  professors : Professor[] = [];
  constructor(private script: ScriptService) { }

  ngOnInit(): void {
    this.professors = [
      new Professor(0,'robanna','robanna@insat.com',123456,'info','fulltime'),
      new Professor(1,'sellaouti','sellaouti@insat.com',123,'info','associate')
    ]
    this.script.load("core")
  }
}


