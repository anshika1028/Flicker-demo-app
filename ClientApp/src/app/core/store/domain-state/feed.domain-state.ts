import { Injectable } from '@angular/core';
import { observable } from 'mobx';
import { Feeds } from '../../../components/feed/store/domain-model/feeds';

@Injectable()
export class FeedsDomainState {
  @observable feeds: Feeds;
  constructor() {
  }
}
