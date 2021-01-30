import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScriptService } from '../script.service';
import { Department } from 'src/app/models/departments';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private script: ScriptService) { }

  departments : Department[] = [];
  ngOnInit(): void {
    this.departments = [
      new Department(0,'info','abdraze9@gmail.com',123,'abderaze9'),
      new Department(1,'bio','madame@gmail.com',123,'madamebaz')
    ]
  }

}
