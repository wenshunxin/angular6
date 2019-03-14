import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {RequestParams} from './http-request';

@Injectable()

export class HttpService {

  private hostname: string;

  constructor(private http: HttpClient,
              private message: NzMessageService
  ) {

    this.hostname = "https://cnodejs.org/api/v1";
  }

  get(path: string, params?: RequestParams): Promise<any> {
    const _url = this.hostname + path;
    const _httpOptions = this.setHttpOptions(params);
    return new Promise((resolve, reject) => {
      this.http.get(_url, _httpOptions).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.warn('err');
          console.warn(err);
          reject(err);
        });
    });
  }

  delete(path: string, params?: RequestParams): Promise<any> {
    const _url = this.hostname + path;
    const _httpOptions = this.setHttpOptions(params);
    return new Promise((resolve, reject) => {
      this.http.delete(_url, _httpOptions).toPromise()
        .then(res => {
          resolve(res);

        })
        .catch(err => {
          console.warn('err');
          console.warn(err);
          reject(err);
        });
    });
  }

  post(path: string, body: any, params?: RequestParams): Promise<any> {
    const _url = this.hostname + path;
    const _httpOptions = this.setHttpOptions(params);
    return new Promise((resolve, reject) => {
      this.http.post(_url, body, _httpOptions).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.warn('err');
          console.warn(err);
          reject(err);
        });
    });
  }

  put(path: string, body?: any, params?: RequestParams): Promise<any> {
    const _url = this.hostname + path;
    const _httpOptions = this.setHttpOptions(params);
    return new Promise((resolve, reject) => {
      this.http.put(_url, body, _httpOptions).toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.warn('err');
          console.warn(err);
          reject(err);
        });
    });
  }

  private setHttpOptions(params?: RequestParams) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    });
    return {
      headers: headers,
      params: params || null
    };
  }
}
