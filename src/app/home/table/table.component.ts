import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { RoutingJumpService } from "../../core/service/routing-jump.service";

import { getRule } from "../../core/mock/table_list";

import data from "../../core/mock/data";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
    q: any = {
       pi: 1,
       ps: 10,
       sorter: '',
       status: null,
       statusList: [],
     };
    dataSet:any;
    allChecked = false;
    indeterminate = false;

    selectedRows=[];
    totalCallNo = 0;
    constructor(
        private routeJump :RoutingJumpService,
         private cdr: ChangeDetectorRef
    ) {
        this.dataSet=data.tableData;
    }

    ngOnInit() {
        this.dataSet = getRule(this.q);

    }

    // 全选
    checkAll(value):void{
        this.selectedRows = [];
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

    handleSum(){
        this.selectedRows=[];
        this.totalCallNo = 0;
        this.dataSet.forEach((item,index)=>{
            if(item.checked){
                this.selectedRows.push(item);
                this.totalCallNo += ~~item.callNo;
            }else{
                this.selectedRows.splice(index,1);
            }
        })
    }

    getData():void{
        this.dataSet = getRule(this.q);
    }
    reset():void{
        this.q= {
            pi: 1,
            ps: 10,
            sorter: '',
            status: null,
            statusList: []
        };
        this.dataSet = getRule(this.q);
    }

    add():void{
        console.log("添加")
    }
}
