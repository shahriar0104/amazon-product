import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsModule} from './product/module/products.module';
import {FormsModule} from '@angular/forms';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMyDatePickerModule,
    AppRoutingModule,
    CoreModule,
    ProductsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
