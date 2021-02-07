import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professors' ; 
import { ProfessorsService } from '../services/professors/professors.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professors : Professor[] = [];
  constructor(private professorsService: ProfessorsService) { }

  ngOnInit(): void {
    this.professorsService.getProfessors().subscribe((res: Professor[]) => {
     this.professors = res
    })
  }

}
