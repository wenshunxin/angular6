import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { BaseComponent } from "./base/base.component";
import { BindingComponent } from "./binding/binding.component";
import { NotificationComponent } from "./notification/notification.component";
import { SecurityComponent } from "./security/security.component";
const routes: Routes = [
    {
        path:"",
        component:SettingsComponent,
        children:[
            {
                path: '',
                redirectTo: 'base',
                pathMatch: 'full'
            },
            {
                path:"base",
                component:BaseComponent
            },
            {
                path:"binding",
                component:BindingComponent
            },
            {
                path:"notification",
                component:NotificationComponent
            },
            {
                path:"security",
                component:SecurityComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
