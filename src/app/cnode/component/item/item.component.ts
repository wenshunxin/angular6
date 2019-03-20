import { Component, OnInit,Input,EventEmitter} from '@angular/core';
import { RoutingJumpService } from "../../../core/service/routing-jump.service";
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    @Input() item:any;
    constructor(
        private routingJumping:RoutingJumpService
    ) { }

    ngOnInit() {

    }
    handleGoTopic(value:string):void{
        this.routingJumping.jumping(`/cnode/topic/${value}`)
    }

    handleGoUser(value:string):void{
        this.routingJumping.jumping(`/cnode/user/${value}`)
    }
}
