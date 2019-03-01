import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from "../../../shared/shared.module";
import { BaseComponent } from './base/base.component';
import { SecurityComponent } from './security/security.component';
import { BindingComponent } from './binding/binding.component';
import { NotificationComponent } from './notification/notification.component';
@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  declarations: [SettingsComponent, BaseComponent, SecurityComponent, BindingComponent, NotificationComponent]
})
export class SettingsModule { }
