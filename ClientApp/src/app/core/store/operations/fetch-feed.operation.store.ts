import { OperationBaseStore } from './operation.base.store';
import { Injectable } from '@angular/core';
import { CoreService } from '../services/core.service';
import { ApiResponse } from '../domain-model/api-response.model'
import { FeedsWrapper } from '../../../components/feed/store/domain-model/feeds';

@Injectable()
export class FetchFeedsOperationStore extends OperationBaseStore {
  constructor(public service: CoreService) {
    super();
  }

  onstart = () => {
    return new Promise((resolve, reject) => {
      this.service.fetchFeeds().subscribe(
        (response: ApiResponse<FeedsWrapper>) => {
          resolve(response.data);
        },
        response => {
          reject(response.error);
        }
      );
    });
  }
}
