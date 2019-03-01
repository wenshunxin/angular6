import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['../security/security.component.less']
})
export class NotificationComponent implements OnInit {
    i: any = {
        password: true,
        messages: true,
        todo: true,
    };
    constructor() { }

    ngOnInit() {
    }

}
