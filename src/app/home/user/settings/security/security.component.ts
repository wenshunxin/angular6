import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.less']
})
export class SecurityComponent implements OnInit {
    listData=[
        {
            title:"账户密码",
            text:`当前密码强度：强`
        },
        {
            title:"密保手机",
            text:"已绑定手机：159****2231"
        },
        {
            title:"密保问题",
            text:"未设置密保问题，密保问题可有效保护账户安全"
        },
        {
            title:"备用邮箱",
            text:"已绑定邮箱：cip*****.com"
        },
        {
            title:"MFA 设备",
            text:"未绑定 MFA 设备，绑定后，可以进行二次确认"
        }
    ]
    constructor() { }

    ngOnInit() {
    }

}
