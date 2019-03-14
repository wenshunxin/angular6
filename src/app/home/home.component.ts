import { Component, OnInit } from '@angular/core';
import { TabsService } from "../core/service/tabs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    visible = false;
    right="0";
    constructor(

    ) {}

    ngOnInit() {

    }
    open(): void {
        this.right = (this.right=="400px")?"0":"400px";
        this.visible = !this.visible;
    }
}
