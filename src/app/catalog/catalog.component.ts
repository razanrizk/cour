import { Component, OnInit } from '@angular/core';
import { Product, Product_Mock } from '../bean/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public catalog: Array<Product>;
  constructor() { 
 
  this.catalog =Product_Mock;
  
}

ngOnInit() {
}

}