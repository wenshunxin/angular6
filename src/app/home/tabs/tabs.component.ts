import { Component, OnInit } from '@angular/core';
import { RoutingJumpService } from "../../core/service/routing-jump.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
    selectedIndex:number;
    tabsData = [
        {
            text:"文章",
            path:"/home/tabs/articles",
            index:0
        },
        {
            text:"应用",
            path:"/home/tabs/applications",
            index:1
        },
        {
            text:"项目",
            path:"/home/tabs/projects",
            index:2
        }
    ]
    constructor(
        private routingJump :RoutingJumpService,
        private router: Router
    ) { }

    ngOnInit() {
        let data = this.tabsData.filter(data=>data.path==this.router.url);
        this.selectedIndex = data[0].index;
    }

    handleJump(path:string):void{
        this.routingJump.jumping(path);
    }
}
