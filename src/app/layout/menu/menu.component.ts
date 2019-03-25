import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { RoutingJumpService } from "../../core/service/routing-jump.service";
import data from "../../core/mock/data";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
    isCollapsed=false;
    menuList=[];
    @Output() onRemoveElement = new EventEmitter<Element>();
    constructor(
        private routeJump :RoutingJumpService,
        private router: Router
    ) {
        this.menuList = data.menuData;
    }

    ngOnInit() {
        this.handleSelectMenu(data.menuData);
        this.handleOpen(data.menuData);
        this.router.events.subscribe((event) => {
          // example: NavigationStart, RoutesRecognized, NavigationEnd
            this.handleSelectMenu(data.menuData);
            this.handleOpen(data.menuData);
        });
    }

    toggleCollapsed():void{
        this.isCollapsed = !this.isCollapsed;
    }

    /**
     * 实现sider手风琴模式
     * @param {string} menuName
     */
    siderOpenHandler(menuName: string): void {
        this.menuList.forEach((value) => {
            if(!value.hasOwnProperty("path")){
                value.name === menuName ? value.open = true : value.open = false;
            }
        });
    }

    jump(path):void{
        this.onRemoveElement.emit(path);
        this.routeJump.jumping(path);
    }
    handleSelectMenu(menuData):void{
        let router = this.router.url;
        let _this = this;
        menuData.forEach(data=>{
            data['select']=false;
            if(data.hasOwnProperty("path")){
                if(router.indexOf(data.path)>-1){
                    data['select']=true;
                }
            }else{
                _this.handleSelectMenu(data.children)
            }
        })
    }

    handleOpen(menuData):void{
        // let router = this.router.url;
        // let _this = this;
        // this.menuList.forEach(item=>{
        //     if(item.hasOwnProperty("children")){
        //         item.open = false;
        //         item.children.forEach(j=>{
        //             if(router.indexOf(j.path)>-1){
        //                 item.open = true;
        //             }
        //         })
        //
        //     }
        // })
    }
}
