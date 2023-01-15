import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Total } from '../model/Cart';
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
  productList = new BehaviorSubject<any>(this.cartData)

  totalList: Total = {
    cod: '',
    discount: 0.0,
    total: 0,
    subTotal: 0
  };
  TotalOberservable= new BehaviorSubject<Total>(this.totalList)


  Seila: number = 0

  getProducts(){
    return this.httpClient.get(`${API}itens`)
  }

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
    this.Seila++
    this.productList.next(this.cartData)
  }

  removeAllCart(){
    this.cartData = []
    this.productList.next(this.cartData)
  }

  //Calculos

  getDiscount(cod: string){
    return this.httpClient.get(`${API}cupons?cod=${cod}`)
  }

  setDiscount(body: Total){
    this.totalList = {...this.totalList, ...body}
    this.TotalOberservable.next(this.totalList)
  }

  getTotal(){
    this.totalList.subTotal = this.cartData.reduce( (total: number, item: Product) => total + (item.quantidade * item.preco), 0 )
    this.totalList.total = this.totalList.subTotal * (1 - this.totalList.discount / 100)
    this.TotalOberservable.next(this.totalList)

    return this.totalList
  }
}
