import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { SharedModule } from "../../shared/shared.module";
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TabsRoutingModule
  ],
  declarations: [TabsComponent]
})
export class TabsModule { }
