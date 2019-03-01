import { Component, OnInit } from '@angular/core';
import  {getFakeList}  from "../../../core/mock/tabs";
import  data  from "../../../core/mock/data";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
    selectedValue:String;
    user:String="李四";
    rate:String="优秀";
    owners=["zxx"];
    ownersData = [
        {
          id: 'wzj',
          name: '我自己',
        },
        {
          id: 'wjh',
          name: '吴家豪',
        },
        {
          id: 'zxx',
          name: '周星星',
        },
        {
          id: 'zly',
          name: '赵丽颖',
        },
        {
          id: 'ym',
          name: '姚明',
        },
    ];
    categories = [];
    list:any=[];
    isSpinning=true;
    num:Number=5;
    constructor() {
        this.categories = data.categories;
    }
    ngOnInit() {
        this.handleInit(this.num);
    }

    changeCategory(status: boolean, idx: number) {
        if (idx === 0) {
          this.categories.map(i => (i.value = status));
        } else {
          this.categories[idx].value = status;
        }
    }

    handleLookOwn():void{
        this.owners = [`wzj`];
    }

    handleInit(count):void{
        this.list = this.list.concat(getFakeList(count));
        this.isSpinning=false;
    }
    getData():void{
        this.handleInit(this.num);
    }
}
