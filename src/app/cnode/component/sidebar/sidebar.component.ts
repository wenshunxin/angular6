import { Component, OnInit } from '@angular/core';
import { RoutingJumpService } from "../../../core/service/routing-jump.service"
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    topicData=[
        {
            id:"5c8f4fafacb681372d419740",
            text:"node uglify"
        },
        {
            id:"5c8f4dc17ce0df373242955c",
            text:"cnodejs有发帖的api吗？"
        },
        {
            id:"5c8f03c07ce0df3732429187",
            text:"使用 Puppeteer 导出声享 PPT"
        },
        {
            id:"5c8e41297ce0df3732428e7d",
            text:"💎 一文看懂 JS 继承"
        },
        {
            id:"5c8df6cc7ce0df3732428d53",
            text:"一个问答译文网站"
        }
    ]

    userData=[
        {
            number:"21365",
            text:"i5ting"
        },
        {
            number:"15390",
            text:"alsotang"
        },
        {
            number:"9350",
            text:"leapon"
        },
        {
            number:"8760",
            text:"jiyinyiyong"
        },
        {
            number:"7835",
            text:"atian25"
        },
        {
            number:"7085",
            text:"yakczh"
        },
        {
            number:"6730",
            text:"im-here"
        },
        {
            number:"6075",
            text:"DevinXian"
        },
        {
            number:"5740",
            text:"chapgaga"
        },
        {
            number:"5335",
            text:"magicdawn"
        }
    ]
    constructor(
        private routingJump:RoutingJumpService
    ) { }

    ngOnInit() {
    }

    handleGoRouter(value:string):void{
        this.routingJump.jumping(`/cnode/topic/${value}`);
    }

    handleGoRouterUser(value:string):void{
        this.routingJump.jumping(value);
    }

    handleGoRouterUser1(value:string):void{
        this.routingJump.jumping(`/cnode/user/${value}`);
    }
}
