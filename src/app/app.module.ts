import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkilsComponent } from './skils/skils.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AboutComponent,
    EducationComponent,
    SkilsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
