import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../core/service/http.service";
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less',"../getstart/getstart.component.less"]
})
export class UserComponent implements OnInit {
    loginname:String;
    dataJson:any;
    isSpinning=true;
    constructor(
        private httpService: HttpService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.loginname = params.loginname;
        });
        this.handleGetData();

        this.router.events.subscribe((event:NavigationEnd)=>{
            if(event instanceof NavigationEnd) {
                this.handleGetData();
            }
        })
    }

    handleGetData():void{
        this.httpService.get(`/user/${this.loginname}`)
        .then(res=>{
            if(res.data.recent_topics){
                res.data.recent_topics.forEach(item=>{
                    item.url = `https://avatars0.githubusercontent.com/u/${this.handleRandom()}?v=4&amp;s=120`
                });
            };
            if(res.data.recent_replies){
                res.data.recent_replies.forEach(item=>{
                    item.url = `https://avatars0.githubusercontent.com/u/${this.handleRandom()}?v=4&amp;s=120`
                });
            };

            this.dataJson = res.data;
            this.isSpinning = false;
        })
    }

    handleRandom(){
        return Math.floor(Math.random()*100000000);
    }
}
