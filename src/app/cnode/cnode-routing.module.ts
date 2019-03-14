import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CnodeComponent } from "./cnode.component";
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
        path:"",
        component:CnodeComponent,
        children:[
            {
              path: '',
              redirectTo: 'home',
              pathMatch: 'full'
            },
            {
                path:"home",
                component:HomeComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CnodeRoutingModule { }
