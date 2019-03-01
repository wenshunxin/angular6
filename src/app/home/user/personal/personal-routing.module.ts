import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from "./personal.component";
const routes: Routes = [
    {
        path:"",
        component:PersonalComponent,
        children:[
            {path: '', redirectTo: 'articles', pathMatch: 'full'},
            {
                path:"articles",
                loadChildren:"../../tabs/articles/articles.module#ArticlesModule",
            },
            {
                path:"projects",
                loadChildren:"../../tabs/projects/projects.module#ProjectsModule"
            },
            {
                path:"applications",
                loadChildren:"../../tabs/applications/applications.module#ApplicationsModule"
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
