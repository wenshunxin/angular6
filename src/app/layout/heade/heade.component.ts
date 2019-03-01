import { Component, OnInit } from '@angular/core';
import { RoutingJumpService } from "../../core/service/routing-jump.service"
@Component({
  selector: 'app-heade',
  template: `
    <div class="header_1">
        <img src="https://www.angular.cn/assets/images/logos/angular/angular.svg"  width="60" height="50"/>
    </div>
    <div class="header_1">
        <nz-dropdown [nzPlacement]="'bottomRight'" >
            <div nz-dropdown class="alain-default__nav-item d-flex align-items-center px-sm ant-dropdown-trigger">
                <nz-avatar nzIcon="user" nzSrc="https://ng-alain.github.io/ng-alain/assets/tmp/img/avatar.jpg"></nz-avatar>
                <span style="margin-left:10px;">admin</span>
            </div>
                <ul nz-menu nzSelectable style="width:160px;">
                    <li nz-menu-item (click)='handleTrigger("/home/user")'>
                        <i nz-icon type="user" theme="outline"></i>
                        <span>个人中心</span>
                    </li>
                    <li nz-menu-item (click)='handleTrigger("/home/user/settings")'>
                        <i nz-icon type="setting" theme="outline"></i>
                        <span>个人设置</span>
                    </li>
                    <li nz-menu-item (click)='handleTrigger("/exception")'>
                        <i nz-icon type="delete" theme="outline"></i>
                        <span>触发错误</span>
                    </li>
                    <li nz-menu-item style="padding:5px 0;" class="li-line" >
                        <div style="height:1px;background:#E8E8E8;"></div>
                    </li>
                    <li nz-menu-item (click)='handleTrigger("/login")'>
                        <i nz-icon type="logout" theme="outline"></i>
                        <span>退出登录</span>
                    </li>
                </ul>
        </nz-dropdown>
    </div>
  `,
  styles:[
    `
    .header_1{
        display:inline-block;
    }
    .header_1:last-child{
        float:right;
    }
    .alain-default__nav-item{
        border-radius: 2px;
        text-align: center;
        line-height: 100%;
        padding: 8px 10px;
        min-width: 50px;
        transition: background-color .3s;
        cursor: pointer;
        outline: 0;
        color:#fff;
        margin-top:10px;
    }
    .alain-default__nav-item:hover {
        color: #fff;
        background-color: rgba(255,255,255,.2)!important;
    }
    .li-line:hover{
        background:#fff;
    }
    `
  ]
})


export class HeadeComponent implements OnInit {

    constructor(
        private routJuming :RoutingJumpService
    ) { }

    ngOnInit() {
    }

    handleTrigger(value:string):void{
        console.log(value)
        this.routJuming.jumping(value)
    }

}
