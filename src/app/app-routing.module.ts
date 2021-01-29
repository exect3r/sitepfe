import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ProfessorComponent } from './professor/professor.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: "professors", component: ProfessorComponent },
  { path: "staff", component: StaffComponent },
  { path: "students", component: StudentsComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "events", component: CalendarComponent},
  { path: "staff", component: StaffComponent },
  { path: "staff", component: StaffComponent },
  { path: "staff", component: StaffComponent },
  { path: "**", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
