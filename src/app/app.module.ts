import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalGraphicsComponent } from './principal-graphics/principal-graphics.component';
import { MapComponent } from './map/map.component';
import { ChartsModule } from 'ng2-charts';
import { SlidesGraphicsComponent } from './slides-graphics/slides-graphics.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalGraphicsComponent,
    MapComponent,
    SlidesGraphicsComponent
  ],
  imports: [
    BrowserModule, ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
