import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';

// import { FeedService } from './components/feed/store/services/feed.service';
import { ConfigService } from './core/config/config.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SearchFeedComponent } from './components/feed/search-feed/search-feed.component';


export function init_app(configService: ConfigService) {
  return () => configService.getConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    SearchFeedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule.forRoot(),
    CoreModule.forRoot(),
  ],
  providers: [
    ConfigService, { provide: APP_INITIALIZER, useFactory: init_app, deps: [ConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
