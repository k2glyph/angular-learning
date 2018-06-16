import { ProductListComponent } from '../product/product-list.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { NotfoundComponent } from '../shared/notfound/notfound.component'
import { WelcomeComponent } from '../welcome/welcome.component';

export const routes = [
    { path: '', component: WelcomeComponent },
    { path: 'product', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: '**', component: NotfoundComponent },
];