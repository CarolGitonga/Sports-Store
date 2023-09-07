
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
//selectedCategory property is assigned the user’s choice of category (where null means all
//categories) and is used in the updateData method as an argument to the getProducts method, delegating the filtering to the data source.
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository,
                private cart: Cart,
                //The constructor has a Router parameter, which is provided by Angular through the dependency
              //injection feature when a new instance of the component is created.
                private router: Router) {}

//products and categories properties are used to generate HTML content in the template, using data obtained from the repository.
    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }
//This method brings these two members together in a method that can be invoked when the user makes a category selection.
    changeCategory(newCategory?: any) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
      this.productsPerPage = Number(newSize);
      this.changePage(1);
  }

    get pageCount(): number {
        return Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productsPerPage)
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl('/cart');//to navigate to the /cart URL.
    }
  }
  