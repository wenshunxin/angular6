import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {
    colorData=[
        {
            color:"#1890ff",
            text:"123456"
        },
        {
            color:"#52c41a",
            text:"123456"
        },
        {
            color:"#fa8c16",
            text:"123456"
        },
        {
            color:"#eb2f96",
            text:"123456"
        }
    ];
    isActive=true;
    constructor() { }

    ngOnInit() {
        setTimeout(()=>{
            this.isActive = false;
        },1000)
    }

}
