import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveViewComponent } from './live-view/live-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveViewComponent,
    NotFoundComponent,
    EventPreviewComponent,
    EventDetailsComponent,
    EventListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
