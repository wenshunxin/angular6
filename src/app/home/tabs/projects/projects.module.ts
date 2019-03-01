import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from "./projects.component";
import { SharedModule } from "../../../shared/shared.module";
import { AvatarListComponent } from "../../../shared/component/avatar-list/avatar-list.component";


import { TimePipe } from "../../../shared/pipes/time.pipe";
@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [ProjectsComponent,AvatarListComponent,TimePipe]
})
export class ProjectsModule { }
