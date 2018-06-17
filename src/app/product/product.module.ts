import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard/product-guard.service';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'product', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent, canActivate: [ProductGuardService] },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [ProductGuardService, ProductService]
})
export class ProductModule { }
