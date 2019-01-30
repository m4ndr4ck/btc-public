import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, APP_INITIALIZER, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './views/home/home.component';
import {ComprarComponent} from "./views/comprar-bitcoin/comprar.component";
import {RateService} from "./core/services/rate.service";
import {registerLocaleData} from "@angular/common";

export function init(rate: RateService) {
    return () => rate.getRate();
}

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [    {
      'provide': APP_INITIALIZER,
      'useFactory': init,
      'deps': [RateService, ComprarComponent],
      'multi': true
  },
  {provide: LOCALE_ID, useValue: 'pt'},
  RateService, ComprarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
