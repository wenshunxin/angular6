import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from "./table.component";
const routes: Routes = [
    {
        path:"",
        component:TableComponent,
        data:{
            breadcrumb:"表格"
        }
    },
    {
        path:"table-edit/:key",
        loadChildren:"./table-edit/table-edit.module#TableEditModule"
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
