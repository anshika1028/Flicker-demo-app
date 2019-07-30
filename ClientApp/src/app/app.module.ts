import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SearchFeedComponent } from './components/feed/components/search-feed/search-feed.component';
import { HttpConfigInterceptor } from './interceptors/http.iterceptors';


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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
