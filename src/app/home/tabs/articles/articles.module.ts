import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from "./articles.component";
import { SharedModule } from "../../../shared/shared.module";
@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule
  ],
  declarations: [ArticlesComponent]
})
export class ArticlesModule { }
