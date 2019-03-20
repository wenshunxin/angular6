import { Component, OnInit,OnChanges,SimpleChanges} from '@angular/core';
import { HttpService } from "../../core/service/http.service";
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.less']
})
export class TopicComponent implements OnInit {
    id:String;
    json={};
    isSpinning=true;
    repliesNum:Number;
    constructor(
        private httpService: HttpService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = params.id;
        });
        this.handleGetData();

        this.router.events.subscribe((event:NavigationEnd)=>{
            if(event instanceof NavigationEnd) {
                this.handleGetData();
            }
        })
    }

    handleGetData(){
        this.httpService.get(`/topic/${this.id}`)
        .then(res=>{
            this.json = res.data;
            if(res.data.replies){
                this.repliesNum = res.data.replies.length;
            };
            this.isSpinning = false;
        })
    }
}
