import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableEditComponent } from "./table-edit.component";
const routes: Routes = [
    {
        path:"",
        component:TableEditComponent,
        data:{
            breadcrumb:"表格编辑"
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableEditRoutingModule { }
