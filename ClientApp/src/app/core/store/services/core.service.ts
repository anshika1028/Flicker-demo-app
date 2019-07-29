import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class CoreService {

    constructor(private http: HttpClient) {}

    fetchFeeds() {
      //return  this.http.get(`${environment.fetchFeeds}`);
      return this.http.get('http://localhost:3001/api/feeds');

    }

}
