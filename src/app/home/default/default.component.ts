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
            text:"123,456"
        },
        {
            color:"#52c41a",
            text:"123,456"
        },
        {
            color:"#fa8c16",
            text:"123,456"
        },
        {
            color:"#eb2f96",
            text:"123,456"
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}
