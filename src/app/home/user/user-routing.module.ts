import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path:"",
        children:[
            {path: '', redirectTo: 'personal', pathMatch: 'full'},
            {
                path:"personal",
                loadChildren:"./personal/personal.module#PersonalModule"
            },
            {
                path:"settings",
                loadChildren:"./settings/settings.module#SettingsModule"
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
