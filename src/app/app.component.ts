import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sitepfe';

  constructor(private script: ScriptService) { }

  ngOnInit(): void {
  }
  
}
