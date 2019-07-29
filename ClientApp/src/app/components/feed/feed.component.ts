import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConfigService } from '../../core/config/config.service';
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

  private config = ConfigService.config;

  constructor(private configService: ConfigService, protected viewState: FeedViewState) { }

  ngOnInit() {
  }

}
