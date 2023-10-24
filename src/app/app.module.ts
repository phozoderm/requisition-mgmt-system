import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProgressIndicatorComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
