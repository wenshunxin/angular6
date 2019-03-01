import { Component, OnInit } from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { RoutingJumpService } from "../core/service/routing-jump.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    validateForm: FormGroup;
    constructor(private fb: FormBuilder,
        private routeJump :RoutingJumpService
    ) {}

    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [ 17778171251, [ Validators.required ] ],
            password: [ 123456, [ Validators.required ] ],
            remember: [ true ]
        });
    }
    submitForm():void {
        if (!this.validateForm.valid) {
            for (const i in this.validateForm.controls) {
                this.validateForm.controls[ i ].markAsDirty();
                this.validateForm.controls[ i ].updateValueAndValidity();
            }
            return ;
        }
        this.routeJump.jumping("/home")
    }
}
