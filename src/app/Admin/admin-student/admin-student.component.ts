import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../script.service'
@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {

  constructor(private script: ScriptService) { }


  ngOnInit(): void {
    this.script.load("core")
  }
}
