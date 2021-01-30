import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ProfessorComponent } from './professor/professor.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';
import { FileManagerComponent } from './file-manager/file-manager.component';

const routes: Routes = [
  { path: "professors", component: ProfessorComponent },
  { path: "staff", component: StaffComponent },
  { path: "students", component: StudentsComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "calender", component: CalenderComponent },
  { path: "staff", component: StaffComponent },
  { path: "app-chat", component: ChatAppComponent },
  { path: "app-filemanager", component: FileManagerComponent },
  { path: "staff", component: StaffComponent },
  { path: "staff", component: StaffComponent },
  { path: "**", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
