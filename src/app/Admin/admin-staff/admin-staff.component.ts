import { Component, OnInit } from '@angular/core';

import { Staff } from 'src/app/models/staff';
import { ScriptService } from '../../script.service';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-staff',
  templateUrl: './admin-staff.component.html',
  styleUrls: ['./admin-staff.component.css'],
})
export class AdminStaffComponent implements OnInit {
  staffs: Staff[] = [];

  constructor(
    private script: ScriptService,
    private adminservice: AdminService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminservice.getStaff().subscribe(
      (staffs) => (this.staffs = staffs),
      (erreur) => {
        this.toaster.warning(
          'Problème de connaxion à la base de données, les staffs sont fake'
        );
        this.staffs = this.adminservice.getFStaffs();
      }
    );
  
    this.script.load('core');
  }

  addStaff(formulaire: NgForm) {
    this.adminservice.addStaff(formulaire.value).subscribe(
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
