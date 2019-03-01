import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { SharedModule } from "../../../shared/shared.module";
import { ApplicationsComponent } from "./applications.component";
@NgModule({
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule
  ],
  declarations: [ApplicationsComponent]
})
export class ApplicationsModule { }
