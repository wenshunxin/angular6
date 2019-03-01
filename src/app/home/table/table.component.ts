import { Component, OnInit } from '@angular/core';
import { RoutingJumpService } from "../../core/service/routing-jump.service";



import data from "../../core/mock/data";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    dataSet:any;
    allChecked = false;
    indeterminate = false
    constructor(
        private routeJump :RoutingJumpService
    ) {
        this.dataSet=data.tableData;
    }

    ngOnInit() {
    }

    // 全选
    checkAll(value):void{
        this.dataSet.forEach(data => {
            if (!data.disabled) {
                data.checked = value;
            }
        });
        this.refreshStatus();
    }
    // 单选
    refreshStatus():void{
        const allChecked = this.dataSet.filter(value => !value.disabled).every(value => value.checked === true);
        const allUnChecked = this.dataSet.filter(value => !value.disabled).every(value => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
    }

    handleEdit(row):void{
        this.routeJump.jumping(`/home/table/table-edit/${row.key}`)
    }
}
