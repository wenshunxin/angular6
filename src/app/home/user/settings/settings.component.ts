import { Component, OnInit } from '@angular/core';
import { RoutingJumpService } from "../../../core/service/routing-jump.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
    menuType:String="inline";
    menuList=[
        {
            title:"基本设置",
            path:"/home/user/settings/base",
            select:true
        },
        {
            title:"安全设置",
            path:"/home/user/settings/security",
            select:false
        },
        {
            title:"账号绑定",
            path:"/home/user/settings/binding",
            select:false
        },
        {
            title:"新消息通知",
            path:"/home/user/settings/notification",
            select:false
        }
    ];
    constructor(
        private routerJumping:RoutingJumpService,
        private router: Router
    ) {
        let _this = this;
        let getWindow = function(){
          return window.innerWidth;
        };

        window.onresize = function() {
            if(getWindow()>1200){
                _this.menuType = "inline";
            }else{
                _this.menuType = "horizontal";
            }
        };
    }

    ngOnInit() {
        let router = this.router.url;
        this.menuList.forEach(data=>{
            if(router.indexOf(data.path)>-1){
                data.select=true;
            }else{
                data.select = false;
            }
        })
    }

    handleGo(path:string):void{
        this.routerJumping.jumping(path);
    }

}
