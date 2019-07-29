import { Component, OnInit } from '@angular/core';
import { FeedViewState } from '../store/view-state/feed.view-state';

@Component({
  selector: 'app-search-feed',
  templateUrl: './search-feed.component.html',
  styleUrls: ['./search-feed.component.css']
})
export class SearchFeedComponent implements OnInit {

  constructor(protected viewState: FeedViewState) { }

  ngOnInit() {
  }

}
