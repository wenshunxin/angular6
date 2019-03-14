import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CnodeRoutingModule } from './cnode-routing.module';
import { CnodeComponent } from "./cnode.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { CnodeTimePipe } from "../shared/pipes/cnode-time.pipe"
@NgModule({
  imports: [
    CommonModule,
    CnodeRoutingModule,
    SharedModule
  ],
  declarations: [CnodeComponent, HomeComponent,CnodeTimePipe]
})
export class CnodeModule { }
