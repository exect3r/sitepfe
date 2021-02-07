import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Pfe } from '../models/pfe';
import { Student } from '../models/student';
import { Task } from '../models/task';
import { ScriptService } from '../script.service';
import { AuthService } from '../services/auth/auth.service';
import { StudentsService } from '../services/students/students.service';
import { PfesService } from '../services/tasks/pfes.service';
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
  pfe: Pfe;
  student: Student

  constructor(private script: ScriptService, private router: Router, private viewportScroller: ViewportScroller,
    private tasksService: TasksService, private studentsService: StudentsService, private pfeService: PfesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.script.load("nestable", "knobjs");

    this.taskList = [];
    this.pfe = new Pfe(null, "undefined", "undefined", null, null, null);

    /// TODO: currently hardcoded, get current student id from session.
    this.pfeService.getPfeByStudent(this.authService.getUserId()).subscribe((v: Pfe) => {
      this.pfe = v;

      this.studentsService.getStudentById(this.pfe.student).subscribe((n : Student) => {
        this.student = n;
      });

      this.tasksService.getTasksByPfe(this.pfe).subscribe((v: Task[]) => {
        v.forEach(task => this.taskList.push(new Task(task._id, task.name, task.description, new Date(task.dateStart), new Date(task.dateEnd), task.status, task.progress)));
      });
    });

    this.createdTask = new Task(null, "", "", new Date(), new Date(), "Planned", 0);
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
    console.log(task.status);
    this.selectedTask = task;
  }

  deleteTask(task: Task): void {
    delete this.pfe.tasks[task._id];
    this.tasksService.deleteTask(task);
    this.pfe.tasks.splice(this.pfe.tasks.indexOf(task._id), 1);
    this.pfeService.updatePfe(this.pfe);
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
    this.tasksService.createTask(this.createdTask).subscribe((v: any) => {
      this.pfe.tasks.push(v.id);
      this.pfeService.updatePfe(this.pfe);

      this.tasksService.getTask(v.id).subscribe((v: any) => {
        this.taskList.push(v);
        this.resetTaskForm();
        this.viewportScroller.scrollToAnchor("TaskBoard-all");
      });
    });
  }

  resetTaskForm(): void {
    this.createdTask = new Task(null, "", "", new Date(), new Date(), "Planned", 0);
  }
}