import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskList: Task[];
  selectedTask: Task;

  constructor(private script: ScriptService) { }

  ngOnInit(): void {
    this.script.load("nestable", "knobjs");

    this.taskList = [
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
      new Task("New code Update on github", "It is a long established fact that a reader will be distracted...",
        new Date(), new Date(), ["Planned", "Completed", "In Progress"][Math.floor(Math.random() * 3)], Math.random() * 100),
    ];
  }

  getTaskByAction(status: string): Task[] {
    let tasks = [];

    this.taskList.forEach(task => {
      if (task.status == status)
        tasks.push(task);
    });

    return tasks;
  }

  showEditModal(task: Task): void {
    this.selectedTask = task;
  }
}