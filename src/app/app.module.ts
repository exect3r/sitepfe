import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTopHeaderComponent } from './main-top-header/main-top-header.component';
import { RightBarSettingPanelComponent } from './right-bar-setting-panel/right-bar-setting-panel.component';
import { QuickMenuComponent } from './quick-menu/quick-menu.component';
import { MainLeftbarComponent } from './main-leftbar/main-leftbar.component';
import { ProjectContentAreaComponent } from './project-content-area/project-content-area.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { NewEventPopupComponent } from './new-event-popup/new-event-popup.component';
import { DirectEventPopupComponent } from './direct-event-popup/direct-event-popup.component';
import { EditModalPopupComponent } from './edit-modal-popup/edit-modal-popup.component';
import { ProfessorComponent } from './professor/professor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CalenderComponent } from './calender/calender.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditTaskModalPopupComponent } from './edit-task-modal-popup/edit-task-modal-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTopHeaderComponent,
    RightBarSettingPanelComponent,
    QuickMenuComponent,
    MainLeftbarComponent,
    ProjectContentAreaComponent,
    PageHeaderComponent,
    PageTitleComponent,
    PageFooterComponent,
    NewEventPopupComponent,
    DirectEventPopupComponent,
    EditModalPopupComponent,
    ProfessorComponent,
    DashboardComponent,
    StaffComponent,
    StudentsComponent,
    DepartmentsComponent,
    CalenderComponent,
    ChatAppComponent,
    FileManagerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    EditTaskModalPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
