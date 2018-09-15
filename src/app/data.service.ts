import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  private url : string = 'http://www.mocky.io/v2/581335f71000004204abaf83';

  constructor(private http: Http) {
  }

  public getData() {
    return this.http.get(this.url);
  }


}
