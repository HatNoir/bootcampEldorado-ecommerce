import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

const API = environment.API

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private httpClient: HttpClient
  ) { }

  cartData: Product[] = []
  productList = new BehaviorSubject<any>([])


  getCart(){
    return this.productList.asObservable()
  }

  setProduct(product: Product){
    this.cartData.push(product)
    this.productList.next([...this.cartData])
  }

  addToCart(product: Product){
    const prod = this.cartData.find((item: Product) => product.codigo === item.codigo)

    if (!prod){
      this.cartData.push({...product, quantidade: 1})
    } else {
      prod.quantidade++
    }
    
    this.productList.next([...this.cartData])
  }

  getAmout(){
    return this.cartData.length || 0;
  }

  removeProduct(product: Product){
    this.cartData.map( (itemCart: Product, index) => {
      if (product.codigo === itemCart.codigo) this.cartData.splice(index, 1)
    })

    this.productList.next(this.cartData)
  }

  removeAllCart(){
    this.cartData = []
    this.productList.next(this.cartData)
  }

  getProducts(){
    return this.httpClient.get(`${API}itens`)
  }
}
