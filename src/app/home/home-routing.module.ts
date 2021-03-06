import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import { MapComponent } from "./map/map.component";
const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        data:{
            breadcrumb:"首页"
        },
        children:[
            {
                path:"default",
                loadChildren:"./default/default.module#DefaultModule"
            },
            {
                path:"table",
                loadChildren:"./table/table.module#TableModule"
            },
            {
                path:"form",
                loadChildren:"./form/form.module#FormModule"
            },
            {
                path:"tabs",
                loadChildren:"./tabs/tabs.module#TabsModule"
            },
            {
                path:"user",
                loadChildren:"./user/user.module#UserModule"
            },
            {
                path:"error",
                loadChildren:"./error/error.module#ErrorModule"
            },
            {
                path:"calendar",
                loadChildren:"./calendar/calendar.module#CalendarModule"
            },
            {
                path:"map",
                component:MapComponent
            },
            {
              path: '',
              redirectTo: 'default',
              pathMatch: 'full'
            },
            {
              path: '**',
              redirectTo: 'default',
              pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
