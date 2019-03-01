import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { getNotice } from "../../../core/mock/tags";
import { RoutingJumpService } from "../../../core/service/routing-jump.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.less']
})
export class PersonalComponent implements OnInit {

    tags = ["很有想法的","专注撩妹","帅~","通吃","专职后端","海纳百川"];
    inputVisible = false;
    inputValue = '';
    notices=[];
    selectedIndex:number = 0;
    tabsData = [
        {
            text:"文章",
            path:"/home/user/personal/articles",
            index:0
        },
        {
            text:"应用",
            path:"/home/user/personal/applications",
            index:1
        },
        {
            text:"项目",
            path:"/home/user/personal/projects",
            index:2
        }
    ]
    @ViewChild('inputElement') inputElement: ElementRef;
    constructor(
        private routingJump :RoutingJumpService,
        private router: Router
    ) {
        this.notices = getNotice();
    }

    ngOnInit() {
        let data = this.tabsData.filter(data=>data.path==this.router.url);
        this.selectedIndex = data[0].index;
    }

    showInput():void{
        this.inputVisible = true;
        setTimeout(() => {
            this.inputElement.nativeElement.focus();
        }, 10)
    }

    handleInputConfirm(): void {
        if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
            this.tags.push(this.inputValue);
        }
        this.inputValue = '';
        this.inputVisible = false;
    }

    handleJump(path:string):void{
        this.routingJump.jumping(path);
    }

}
