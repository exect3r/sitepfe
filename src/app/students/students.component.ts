import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students : Student[] = []
  constructor() { }

  ngOnInit(): void {
    this.students = [
      new Student(1700513, 'kchaoubhim', 'gl', 'kesomlafaa@gmail.com', '2461235',[]),
      new Student(1700512, 'padgekinami', 'gl', 'padge@gmail.com', '25481794',[])
    ]
  }

}
