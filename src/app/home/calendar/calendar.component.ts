import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    date = new Date();
    mode = 'month';
    constructor() { }

    ngOnInit() {
    }

    panelChange(e):void{

    }
}
