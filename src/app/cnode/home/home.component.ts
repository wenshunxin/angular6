import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../core/service/http.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    hotTags=[
        {
            text:"全部"
        },
        {
            text:"精华"
        },
        {
            text:"分享"
        },
        {
            text:"问答"
        },
        {
            text:"招聘"
        },
        {
            text:"客户端测试"
        }
    ]
    activeIndex=0;
    dataList:any;
    isSpinning=true;
    constructor(
        private httpService: HttpService
    ) { }

    ngOnInit() {
        this.handleGetData("all");
    }
    handleTabs(e,index):void{
        this.activeIndex= ~~index;
    }

    handleGetData(tag):void{
        let params={
            'page':1,
            'tab':tag,
            'limit':20,
            'mdrender':true
        };
        this.httpService.get("/topics",params)
        .then(res=>{
            console.log(res)
            this.isSpinning=false;
            if(res.success){
                this.dataList=res.data;
                this.dataList.forEach(item=>{
                    item["url"]=`https://avatars0.githubusercontent.com/u/${this.handleRandom()}?v=4&amp;s=120`;
                });
            }
        })
    }

    handleRandom():void{
        return Math.floor(Math.random()*100000000)
    }
}
