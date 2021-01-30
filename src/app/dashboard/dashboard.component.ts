import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  createdTask: Task;

  constructor(private script: ScriptService, private router: Router) { }

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

    this.createdTask = new Task("", "", new Date(), new Date(), "Planned", 0);
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

  deleteTask(task: any): void {
    this.taskList = this.taskList.filter(item => item != task);
  }

  onStartDateChanged(date: string): void {
    this.createdTask.dateStart = new Date(date);
  }

  onEndDateChanged(date: string): void {
    this.createdTask.dateEnd = new Date(date);
  }

  createNewTask() : void {
    this.taskList.push(this.createdTask);
    this.resetTaskForm();
    this.router.navigateByUrl("/home/dashboard");
  }

  resetTaskForm(): void {
    this.createdTask = new Task("", "", new Date(), new Date(), "Planned", 0);
  }
}