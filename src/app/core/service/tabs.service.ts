import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TabsService {

    constructor(
        private http :HttpClient
    ) { }

    getTabs():void{
        // let url ="src/app/core/mock/data.json";
        // return this.http.get(url)
        //     .then(res => res.json())
        //     .catch(this.handleError);
    }
}
