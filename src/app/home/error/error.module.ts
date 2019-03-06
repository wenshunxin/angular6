import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { FourThreeComponent } from './four-three/four-three.component';
import { FourFourComponent } from './four-four/four-four.component';
import { FourFiveComponent } from './four-five/four-five.component';
@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule,
    SharedModule
  ],
  declarations: [FourThreeComponent, FourFourComponent, FourFiveComponent]
})
export class ErrorModule { }
