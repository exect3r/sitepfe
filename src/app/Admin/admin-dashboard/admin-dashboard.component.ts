import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../script.service'
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private script: ScriptService) { }

  ngOnInit(): void {
    this.script.load("core")
  }
}
