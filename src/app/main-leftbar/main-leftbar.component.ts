import { Component, Input, OnInit } from '@angular/core';
import { ScriptService } from '../script.service'
@Component({
  selector: 'app-main-leftbar',
  templateUrl: './main-leftbar.component.html',
  styleUrls: ['./main-leftbar.component.css']
})
export class MainLeftbarComponent implements OnInit {

   status: string = "home" ;

  constructor(private script: ScriptService) { }


  getURL(uri : string ) {
    return ['/'+this.status+'/'+uri];
}


ngOnInit(): void {
  this.script.load("core")
}


}
