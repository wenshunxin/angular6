import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableEditRoutingModule } from './table-edit-routing.module';
import { TableEditComponent } from './table-edit.component';
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    TableEditRoutingModule,
    SharedModule
  ],
  declarations: [TableEditComponent]
})
export class TableEditModule { }
