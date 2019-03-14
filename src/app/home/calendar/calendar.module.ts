import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from "./calendar.component";
import { SharedModule } from "../../shared/shared.module";
@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule
  ],
  declarations: [CalendarComponent]
})
export class CalendarModule { }
