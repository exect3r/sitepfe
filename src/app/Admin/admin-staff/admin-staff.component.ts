import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../script.service'
@Component({
  selector: 'app-admin-staff',
  templateUrl: './admin-staff.component.html',
  styleUrls: ['./admin-staff.component.css']
})
export class AdminStaffComponent implements OnInit {

  constructor(private script: ScriptService) { }


  ngOnInit(): void {
    this.script.load("core")
  }

}
