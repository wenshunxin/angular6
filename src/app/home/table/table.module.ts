import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { SharedModule } from "../../shared/shared.module";
import { TableComponent } from "./table.component";


@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }
