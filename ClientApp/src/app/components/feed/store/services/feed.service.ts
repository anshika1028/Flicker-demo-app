import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class FeedService {

    constructor(private http: HttpClient) {}
    fetchFeedsByTags(tags) {
    return this.http.post('http://localhost:3001/api/feeds', { tags: tags});

    }

}
