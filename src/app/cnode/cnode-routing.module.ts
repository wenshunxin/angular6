import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CnodeComponent } from "./cnode.component";
import { HomeComponent } from './home/home.component';
import { GetstartComponent } from "./getstart/getstart.component";
import { UserComponent } from "./user/user.component";
import { ApiComponent } from "./api/api.component";
import { AboutComponent } from "./about/about.component";
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
            },
            {
                path:"topic/:id",
                loadChildren:"./topic/topic.module#TopicModule"
            },
            {
                path:"getstart",
                component:GetstartComponent
            },
            {
                path:"api",
                component:ApiComponent
            },
            {
                path:"about",
                component:AboutComponent
            },
            {
                path:"user/:loginname",
                component:UserComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CnodeRoutingModule { }
