import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffs : Staff[] = [];
  constructor() { }

  ngOnInit(): void {
    this.staffs = [
      new Staff(0,'samir','samir@insat',123456,'moudir'),
      new Staff(1,'idk','idk@insat',123456789,'bachla')
    ]
  }

}
