import { Component, OnInit } from '@angular/core';
import  data  from "../../../core/mock/data";
import  {getFakeList}  from "../../../core/mock/tabs";
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['../articles/articles.component.less',"./applications.component.less"]
})
export class ApplicationsComponent implements OnInit {
    user:String="李四";
    rate:String="优秀";
    categories = [];
    list:any=[];
    isSpinning=false;
    constructor() {
        this.categories = data.categories;
    }

    ngOnInit() {
        this.list = this.list.concat(getFakeList(8));
    }

    changeCategory(status: boolean, idx: number) {
        if (idx === 0) {
          this.categories.map(i => (i.value = status));
        } else {
          this.categories[idx].value = status;
        }
    }
}
