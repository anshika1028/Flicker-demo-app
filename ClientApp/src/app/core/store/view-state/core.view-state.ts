import { Injectable } from '@angular/core';
import { reaction, when} from 'mobx';
import { Operations } from '../../../shared/commons/constants/global.constant';
import { FetchFeedsOperationStore } from '../operations/fetch-feed.operation.store';
import { FeedsDomainState } from '../domain-state/feed.domain-state';
@Injectable()
export class CoreViewState {
  constructor(public fetchFeedOperation: FetchFeedsOperationStore, public feedsDomainState: FeedsDomainState) {
    this.fetchFeedOperation.start();

    when(
      () => this.fetchFeedOperation.operation === Operations.completed && this.fetchFeedOperation.data,
      () => {
        if (this.fetchFeedOperation.data) {
          this.feedsDomainState.feeds = this.fetchFeedOperation.data.items;
        }
      });
  }
}
