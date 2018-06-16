import { ProductService } from './../product/product.service';
import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export default class AppComponent {
  pageTitle: string = 'User Management System';
  toggleMenu: boolean = true;

  setToggleMenu(toggle: boolean) {
    this.toggleMenu = toggle;
  }
}
