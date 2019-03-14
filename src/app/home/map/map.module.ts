import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from "./map.component";
import { SharedModule } from "../../shared/shared.module";
import { BaiduMapModule } from 'angular2-baidu-map'
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BaiduMapModule.forRoot({ ak: 'gd0GyxGUxSCoAbmdyQBhyhrZ' }),
  ],
  declarations: [MapComponent]
})
export class MapModule { }
