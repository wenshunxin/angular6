import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less']
})
export class BaseComponent implements OnInit {
    validateForm:FormGroup
    constructor(
        private fb:FormBuilder
    ) { }

    ngOnInit() {
        this.validateForm = this.fb.group({
            email  : [ null, [ Validators.required ] ],
            name  : [ null, [ Validators.required ] ],
            profile: [ null, [ Validators.required ] ],
            country:[ "中国", [ Validators.required ] ],
            address:['XX区XXX路 XX 号',[Validators.required ]],
            phone:['17778171251',[Validators.required ]]
        });
    }

}
