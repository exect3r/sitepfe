import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Task } from '../models/task';
import { ScriptService } from '../script.service';
import { TasksService } from '../services/tasks/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskList: Task[];
  selectedTask: Task;
  createdTask: Task;

  constructor(private script: ScriptService, private router: Router, private viewportScroller: ViewportScroller, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.script.load("nestable", "knobjs");

    this.taskList = [];
    this.tasksService.getTasks().subscribe((v: Task[]) => {
      v.forEach(task => this.taskList.push(new Task(task._id, task.name, task.description, new Date(task.dateStart), new Date(task.dateEnd), task.status, task.progress)));
    });

    this.createdTask = new Task("", "", "", new Date(), new Date(), "Planned", 0);
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

  deleteTask(task: Task): void {
    this.tasksService.deleteTask(task);
    this.taskList = this.taskList.filter(item => item != task);
  }

  onStartDateChanged(date: string): void {
    this.createdTask.dateStart = new Date(date);
  }

  onEndDateChanged(date: string): void {
    this.createdTask.dateEnd = new Date(date);
  }

  onChange(task: Task) {
    this.tasksService.updateTask(task);
  }

  createNewTask(): void {
    this.tasksService.createTask(this.createdTask);
    this.taskList.push(this.createdTask);
    this.resetTaskForm();
    this.viewportScroller.scrollToAnchor("TaskBoard-all");
  }

  resetTaskForm(): void {
    this.createdTask = new Task("", "", "", new Date(), new Date(), "Planned", 0);
  }
}