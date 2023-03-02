import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsdMmkPipe } from './pipes/usd-mmk.pipe';
import { CircleAreaPipe } from './pipes/circle-area.pipe';
import { RedElDirective } from './red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsdMmkPipe,
    CircleAreaPipe,
    RedElDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
