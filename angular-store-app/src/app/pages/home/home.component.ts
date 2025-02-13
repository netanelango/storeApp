import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log('Produits chargés:', this.products);
      },
      (error) => console.error('Erreur lors du chargement des produits:', error)
    );
  }
}
