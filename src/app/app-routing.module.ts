import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: './product/module/product.module#ProductsModule',
    loadChildren: () => import('./product/module/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'home',
    // loadChildren: './product/module/product.module#ProductsModule'
    loadChildren: () => import('./product/module/products.module').then(m => m.ProductsModule)
  },
  // shared
  {path: 'error', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
