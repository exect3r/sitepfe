import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { CalenderComponent } from './calender/calender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ProfessorComponent } from './professor/professor.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminProfessorComponent } from './Admin/admin-professor/admin-professor.component';
import { AdminStudentComponent } from './Admin/admin-student/admin-student.component';
import { AdminStaffComponent } from './Admin/admin-staff/admin-staff.component';
import { AdminDepartmentsComponent } from './Admin/admin-departments/admin-departments.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home" ,
    component: HomeComponent,
    children: [
      { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "dashboard", component: DashboardComponent },
      { path: "professors", component: ProfessorComponent },
      { path: "staff", component: StaffComponent },
      { path: "students", component: StudentsComponent },
      { path: "departments", component: DepartmentsComponent },
      { path: "app-chat", component: ChatAppComponent },
      { path: "calender", component: CalenderComponent },
      { path: "app-filemanager", component: FileManagerComponent },
      { path: "staff", component: StaffComponent }
    ]
  },
  { path: "admin" ,
    component: HomeComponent,
    children: [
      { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "dashboard", component: AdminDashboardComponent },
      { path: "professors", component: AdminProfessorComponent },
      { path: "staff", component: AdminStaffComponent },
      { path: "students", component:   AdminStudentComponent },
      { path: "departments", component: AdminDepartmentsComponent },

    ]
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
