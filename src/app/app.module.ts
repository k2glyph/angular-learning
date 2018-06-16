import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import AppComponent from './main/app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpaces, StarComponent, HeaderComponent, SidebarComponent } from './shared';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { routes } from './utils/routes';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailComponent,
    NotfoundComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
