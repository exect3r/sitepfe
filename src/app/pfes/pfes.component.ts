import { Component, OnInit } from '@angular/core';
import { Pfe } from '../models/pfe';
import { Professor } from '../models/professors';
import { ProfessorsService } from '../services/professors/professors.service';
import { StudentsService } from '../services/students/students.service';
import { PfesService } from '../services/tasks/pfes.service';

@Component({
  selector: 'app-pfes',
  templateUrl: './pfes.component.html',
  styleUrls: ['./pfes.component.css']
})
export class PfesComponent implements OnInit {

  pfes: any[];
  constructor(private pfeService: PfesService, private profService: ProfessorsService, private studentService: StudentsService) { }

  ngOnInit(): void {
    this.pfes = [];
    this.pfeService.getPfes().subscribe((v: Pfe[]) => {
      v.forEach(async e => {
        this.pfes.push({
          name: e.name, description: e.description,
          student: (await this.studentService.getStudentById(e.student).toPromise() as any).name,
          supervisor: (await this.profService.getProfessorById(e.supervisor).toPromise() as any).name
        })
      })
    });
  }
}
