import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import data from "../../../core/mock/data.js";
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';


@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css']
})
export class TableEditComponent implements OnInit {
    key:any;
    dataSet:any;
    formData:Object;
    validateForm:FormGroup
    constructor(
        private route : ActivatedRoute,
        private fb: FormBuilder
    ) {
        this.dataSet = JSON.parse(JSON.stringify(data.tableData));
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            name: ['', Validators.required],
        });

        this.route.params.subscribe(
        	params => {
        		this.key= params['key'];
                this.handleGetSingleData(this.key)
        	}
        );
    }
    // 获取d单条数据
    handleGetSingleData(key):void{
        this.formData = this.dataSet.filter(data=>data.key == key);
        this.validateForm.get("name").setValue(this.formData[0].name);
    }

    submitForm():void{

    }
}
