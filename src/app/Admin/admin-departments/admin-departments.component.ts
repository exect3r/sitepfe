import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../script.service'
@Component({
  selector: 'app-admin-departments',
  templateUrl: './admin-departments.component.html',
  styleUrls: ['./admin-departments.component.css']
})
export class AdminDepartmentsComponent implements OnInit {

  constructor(private script: ScriptService) { }


  ngOnInit(): void {
    this.script.load("core")
  }

}
