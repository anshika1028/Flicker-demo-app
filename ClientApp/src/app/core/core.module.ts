import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationBaseStore } from './store/operations/operation.base.store';
import { CoreService } from './store/services/core.service';
import { FetchFeedsOperationStore } from './store/operations/fetch-feed.operation.store';
import { CoreViewState } from './store/view-state/core.view-state';
import { FeedsDomainState } from './store/domain-state/feed.domain-state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        OperationBaseStore,
        CoreService,
        FeedsDomainState,
        CoreViewState,
        FetchFeedsOperationStore,
      ]
    };
  }
}

