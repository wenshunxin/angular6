import { Component, OnInit } from '@angular/core';
import { TabsService } from "../core/service/tabs.service";
import  data from "../core/mock/data.js";
import { RoutingJumpService } from "../core/service/routing-jump.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    visible = false;
    right="0";
    tabs=[];
    selectedIndex=0;
    constructor(
        private routingJump :RoutingJumpService
    ) {}

    ngOnInit() {
        // console.log(this)
        // console.log(data.menuData)
    }
    open(): void {
        this.right = (this.right=="400px")?"0":"400px";
        this.visible = !this.visible;
    }

    handleOn(value):void{
        let tabsData = JSON.parse(JSON.stringify(data.menuData));
        let arrData = [];
        tabsData.forEach((item,i)=>{
            if(!item.hasOwnProperty("children")){
                arrData.push(item);
            }else{
                // console.log(item.children)
                item.children.forEach(i=>{
                    arrData.push(i)
                })
            }
        });
        arrData.forEach(j=>{
            if(j.path == value){
                this.tabs.push(j)
                // this.tabs = Array.from(new Set(this.tabs));
                var obj = {};
                this.tabs = this.tabs.reduce(function(item, next) {
                    obj[next.path] ? '' : obj[next.path] = true && item.push(next);
                    return item;
                }, []);
            }
        });

        // this.selectedIndex = i; = this.tabs.length;
        this.tabs.forEach((item,i)=>{
            if(item.path == value){
                this.selectedIndex = i;
            }
        })
    }

    handleTab(path):void{
        this.routingJump.jumping(path);
    }
}
