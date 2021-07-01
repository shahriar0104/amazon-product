import {NgModule} from '@angular/core';
import {ProductsComponent} from '../products/products.component';
import {SharedModule} from '../../shared/module/shared.module';
import {ProductsRoutingModule} from './products-routing.module';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {LoadingBarModule} from '@ngx-loading-bar/core';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    AngularMyDatePickerModule,
    LoadingBarModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule {
}
