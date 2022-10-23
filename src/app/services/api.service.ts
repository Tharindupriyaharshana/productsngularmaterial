import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private productDataUpdate = new Subject<any>();
 private ItempriceDataUpdate = new Subject<any>();

  constructor(private http:HttpClient) { }

getItemData(){


  this.http.get<{Data:any}>("http://145.239.206.89/Interview/api/test/items/?fields=id,name,description,ItemCategory,DefaultPriceConcessionID,DefaultPriceConcessionName,active")
   .subscribe((res) => {
  this.productDataUpdate.next(res.Data);
   });

}


getItemPrice(userid:any,catid:any){

  this.http.get<{Data:any}>("http://145.239.206.89/Interview/api/test/items/"+userid+"?include=itempricegroups,pricegroups&priceconcessionid="+catid)
   .subscribe((res) => {
  this.ItempriceDataUpdate .next(res.Data);
   });

}



  getProductListener() {
    return this.productDataUpdate.asObservable();
  }

 getProducPricetListener() {
    return this.ItempriceDataUpdate.asObservable();
  }

}
