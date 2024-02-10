import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { MeetingComponent } from './meeting/meeting.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  {path:"home",component:HomeComponent},
  { path: "login", component: LoginComponent },
  { path: "client", component: ClientComponent },
  { path: "project", component: ProjectComponent},
  { path: "task", component: TaskComponent },
  { path: "meeting", component: MeetingComponent }
];
// canActivate: [authGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
