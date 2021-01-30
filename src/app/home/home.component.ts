import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'sitepfe';
  constructor(private script: ScriptService) { }

  ngOnInit(): void {
    this.script.load("core")
  }

}
