import { OperationBaseStore } from 'src/app/core/store/operations/operation.base.store';
import { Injectable } from '@angular/core';
import { FeedService } from '../services/feed.service';
import { ApiResponse } from 'src/app/core/store/domain-model/api-response.model';
import { Feeds } from '../domain-model/feeds';

@Injectable()
export class FetchFeedsOperationStore extends OperationBaseStore {
  constructor(public service: FeedService) {
    super();
  }

  onstart = (params) => {
    return new Promise((resolve, reject) => {
      this.service.fetchFeedsByTags(params).subscribe(
        (response: ApiResponse<Feeds>) => {
          resolve(response.data);
        },
        response => {
          reject(response.error);
        }
      );
    });
  }
}
