import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _listFilter: string;
    filteredProducts: IProduct[];

    products: IProduct[] = [];
    errorMessage: string;
    constructor(private _productService: ProductService) {
    }
    ngOnInit(): void {
        console.log('In onInit called');
        this._productService.getProducts()
            .subscribe(data => {
                this.products = data;
                this.filteredProducts = this.products;
            }, error => this.errorMessage = error);
    }
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    showOrHideImage(): void {
        this.showImage = !this.showImage;
    }
    performFilter(filter: string): IProduct[] {
        filter = filter.toLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filter) !== -1);
    }
    onNotify(data: string): void {
        console.log(data);
    }
}
