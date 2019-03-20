import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CnodeRoutingModule } from './cnode-routing.module';
import { CnodeComponent } from "./cnode.component";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { CnodeTimePipe } from "../shared/pipes/cnode-time.pipe";
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { GetstartComponent } from './getstart/getstart.component';
import { UserComponent } from './user/user.component';
import { ItemComponent } from './component/item/item.component';
import { ApiComponent } from './api/api.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  imports: [
    CommonModule,
    CnodeRoutingModule,
    SharedModule
  ],
  declarations: [CnodeComponent, HomeComponent,CnodeTimePipe, SidebarComponent, FooterComponent, GetstartComponent, UserComponent, ItemComponent, ApiComponent, AboutComponent]
})
export class CnodeModule { }
