import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../script.service';
import { Professor } from 'src/app/models/professors';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-professor',
  templateUrl: './admin-professor.component.html',
  styleUrls: ['./admin-professor.component.css'],
})
export class AdminProfessorComponent implements OnInit {
  professors: Professor[] = [];
  constructor(
    private script: ScriptService,
    private adminservice: AdminService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminservice.getProfessor().subscribe(
      (professors) => (this.professors = professors),
      (erreur) => {
        this.toaster.warning(
          'Problème de connaxion à la base de données, les personnes sont fake'
        );
        this.professors = this.adminservice.getFProfessor();
      }
    );
    this.script.load('core');
  }

  addProf(formulaire: NgForm) {
    this.adminservice.addProf(formulaire.value).subscribe(
      (prof) => {
        this.toaster.success(`${prof.name}  a été ajouté avec succès`);
        this.router.navigate(['admin/professors']);
      },
      (error) =>
        this.toaster.error(
          'Problème au niveau ed la base de données, veuillez contacter l admin'
        )
    );
  }
}
