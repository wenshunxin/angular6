import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from "./form.component";
import { SharedModule } from "../../shared/shared.module";
@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule
  ],
  declarations: [FormComponent]
})
export class FormModule { }
