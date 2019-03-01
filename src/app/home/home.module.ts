import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";

import { SharedModule } from "../shared/shared.module";

import { HeadeComponent } from "../layout/heade/heade.component";
import { MenuComponent } from "../layout/menu/menu.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent,HeadeComponent,MenuComponent]
})
export class HomeModule { }
