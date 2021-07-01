import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from '../products/products.component';
import {PageNotFoundComponent} from '../../shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ProductsComponent},
    ]
  },
  {path: 'error', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/error', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
