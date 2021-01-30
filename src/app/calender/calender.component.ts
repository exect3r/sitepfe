import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor(private script: ScriptService) { }

  ngOnInit(): void {
    this.script.load("calender");
  }

}
