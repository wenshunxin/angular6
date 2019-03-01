import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';
const routes: Routes = [
    {
        path:"",
        component:TabsComponent,
        children:[
            {path: '', redirectTo: 'articles', pathMatch: 'full'},
            {
                path:"articles",
                loadChildren:"./articles/articles.module#ArticlesModule",
            },
            {
                path:"projects",
                loadChildren:"./projects/projects.module#ProjectsModule"
            },
            {
                path:"applications",
                loadChildren:"./applications/applications.module#ApplicationsModule"
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
