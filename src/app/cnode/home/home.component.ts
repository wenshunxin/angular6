import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../core/service/http.service";
import { RoutingJumpService } from "../../core/service/routing-jump.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    hotTags=[
        {
            text:"全部",
            tag:"all"
        },
        {
            text:"精华",
            tag:"good"
        },
        {
            text:"分享",
            tag:"share"
        },
        {
            text:"问答",
            tag:"ask"
        },
        {
            text:"招聘",
            tag:"job"
        },
        {
            text:"客户端测试",
            tag:"dev"
        }
    ]
    activeIndex=0;
    dataList=[];
    isSpinning=true;
    page=1;
    tag="all";
    constructor(
        private httpService: HttpService,
        private routingJumping:RoutingJumpService
    ) { }

    ngOnInit() {
        this.handleGetData(this.tag);
    }
    handleTabs(value,index):void{
        this.activeIndex= ~~index;
        this.tag = value.tag;
        this.page = 1;
        this.dataList = [];
        this.isSpinning=true;
        this.handleGetData(this.tag);
    }

    handleGetData(tag):void{
        let params={
            'page':this.page,
            'tab':tag,
            'limit':20,
            'mdrender':true
        };
        this.httpService.get("/topics",params)
        .then(res=>{
            this.isSpinning=false;
            if(res.success){
                this.dataList = this.dataList.concat(res.data);
                this.dataList.forEach(item=>{
                    item["url"]=`https://avatars0.githubusercontent.com/u/${this.handleRandom()}?v=4&amp;s=120`;
                });
            }
        })
    }

    handleRandom(){
        return Math.floor(Math.random()*100000000);
    }
    handleAdd():void{
        this.page +=1;
        this.handleGetData(this.tag);
    }
}
