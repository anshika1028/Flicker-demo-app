import { Injectable } from '@angular/core';
import { reaction, action, autorun, observable } from 'mobx';
import { Feeds } from '../domain-model/feeds';
import { FetchFeedsOperationStore } from '../operations/fetch-feed.operation.store';
import { FeedsDomainState } from 'src/app/core/store/domain-state/feed.domain-state';
import { Operations } from 'src/app/shared/commons/constants/global.constant';
import { GlobalLabels } from 'src/app/shared/commons/constants/global.labels';

@Injectable()
export class FeedViewState {
  @observable feeds: Feeds;
  @observable searchText;
  labels = GlobalLabels;
  constructor(public fetchFeedsOperation: FetchFeedsOperationStore, public feedsDomainState: FeedsDomainState) {
    autorun(
      (autorunReaction) => {
        if (
          this.feedsDomainState.feeds
        ) {
          this.feeds = this.feedsDomainState.feeds;
          autorunReaction.dispose();
        }
      }
    );

    reaction(
      () => {
        return {
          data: this.fetchFeedsOperation.operation === Operations.completed &&
          this.fetchFeedsOperation.data,
          error: this.fetchFeedsOperation.operation === Operations.error &&
          this.fetchFeedsOperation.error
        };
      },
      ({data, error}) => {
        if (error) {
          console.log('an error occured');
        } else if (data) {
          this.feeds = data;
        }
      }
    );
  }
  @action
  getFeeds = (tags) => {
      if (tags) {
        this.fetchFeedsOperation.start(tags);
      }
  }
}
