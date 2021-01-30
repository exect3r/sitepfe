import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-edit-task-modal-popup',
  templateUrl: './edit-task-modal-popup.component.html',
  styleUrls: ['./edit-task-modal-popup.component.css']
})
export class EditTaskModalPopupComponent implements OnInit {

  @Input()
  task: Task
  constructor() { }

  ngOnInit(): void {
    this.task = new Task("none", "none", new Date(), new Date(), "none", 0);
  }

  onValueSelected(value: string): void {
    this.task.status = value;
  }

  onStartDateChanged(date: string): void {
    this.task.dateStart = new Date(date);
  }

  onEndDateChanged(date: string): void {
    this.task.dateEnd = new Date(date);
  }
}
