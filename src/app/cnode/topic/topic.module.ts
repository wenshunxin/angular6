import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from "./topic.component";
import { SharedModule } from "../../shared/shared.module";
import { Time2Pipe } from "../../shared/pipes/time2.pipe";
import { Time1Pipe } from "../../shared/pipes/time1.pipe";
@NgModule({
  imports: [
    CommonModule,
    TopicRoutingModule,
    SharedModule
  ],
  declarations: [TopicComponent,Time2Pipe,Time1Pipe]
})
export class TopicModule { }
