import { Product } from '../../shared/models/Product';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ProductServices {
  productsURL = 'http://localhost:3000/products';
  constructor() {}
  // Get all products read
  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.productsURL);
    return (await data.json()) ?? []; 
  }
  async getProductById(Id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.productsURL}/${Id}`);
    return (await data.json()) ?? []; 
  }

  async getLatestProduct(): Promise<Product | undefined> {
    const data = await fetch(this.productsURL);
    return (await data.json()) ?? []; 
  }
  async getRelatedProduct(title:string): Promise<Product | undefined> {
    const data = await fetch(this.productsURL);
    return (await data.json()) ?? []; 
  }
}
