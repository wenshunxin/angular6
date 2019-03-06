import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourThreeComponent } from './four-three/four-three.component';
import { FourFourComponent } from './four-four/four-four.component';
import { FourFiveComponent } from './four-five/four-five.component';
const routes: Routes = [
    {
        path:"",
        children:[
            {
                path:"",
                redirectTo:"403",
                pathMatch: 'full'
            },
            {
                path:"403",
                component:FourThreeComponent
            },
            {
                path:"404",
                component:FourFourComponent
            },
            {
                path:"405",
                component:FourFiveComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
