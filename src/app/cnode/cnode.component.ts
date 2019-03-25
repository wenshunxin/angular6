import { Component, OnInit } from '@angular/core';
import { RoutingJumpService } from "../core/service/routing-jump.service";
@Component({
  selector: 'app-cnode',
  templateUrl: './cnode.component.html',
  styleUrls: ['./cnode.component.less']
})
export class CnodeComponent implements OnInit {
    constructor(
        private routingJump:RoutingJumpService
    ) { }

    ngOnInit() {

    }

    handleGoRouter(value:string):void{
        this.routingJump.jumping(value);
    }
    notify(): void {
        console.log('notify');
    }
}
