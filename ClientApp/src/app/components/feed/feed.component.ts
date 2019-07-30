import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FeedViewState } from './store/view-state/feed.view-state';

import { FetchFeedsOperationStore } from './store/operations/fetch-feed.operation.store';
import { FeedService } from './store/services/feed.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [FeedViewState, FetchFeedsOperationStore, FeedService]
})
export class FeedComponent implements OnInit {


  constructor(protected viewState: FeedViewState) { }

  ngOnInit() {
  }

}
