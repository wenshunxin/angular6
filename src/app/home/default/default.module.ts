import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { DefaultComponent } from "./default.component";

import { EchartComponent } from "../../shared/component/echart/echart.component";

// 引入echarts插件
import  { NgxEchartsModule } from "ngx-echarts";
@NgModule({
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule,
    NgxEchartsModule
  ],
  declarations: [DefaultComponent,EchartComponent]
})
export class DefaultModule { }
