import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pricemodal',
  templateUrl: './pricemodal.component.html',
  styleUrls: ['./pricemodal.component.css']
})
export class PricemodalComponent implements OnInit {
public showspiner=false;
public pricedata=[];
public visibility="Not Avilable";
public priceGrpArr: { name: any; price: any; pricetype: any; }[] = []
public priceGrpArr1: { name: any; price: any; pricetype: any; }[] = []
public priceGrpArr2: { name: any; price: any; pricetype: any; }[] = []
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<any>, private api:ApiService) { }

  ngOnInit(): void {
  this.dialogRef.updateSize('60%', '60%');
this.showspiner=true;
this.api.getItemPrice(this.data.userid,this.data.DefaultPriceConcessionId);
this.getPriceData();

  }

getPriceData(){

this.api.getProducPricetListener().subscribe(res=>{
this.showspiner=false;
console.log(res.ItemPriceGroups);
this.pricedata=res.ItemPriceGroups;
this.pricedata.forEach((ele :any)=> {
  if(ele) {
    this.priceGrpArr.push({
      name: ele.PriceGroups.Name,
      price:ele.PriceIncludingTax,
pricetype:ele.PriceType
    })

  }
});
if (this.priceGrpArr && this.priceGrpArr.length > 0) {
const name1=this.priceGrpArr[0].name;
  this.priceGrpArr.forEach(data=>{
if(data){
if(data.name==name1){
this.priceGrpArr1.push({
      name: data.name,
      price:data.price,
pricetype:data.pricetype
    })

}else{
this.priceGrpArr2.push({
      name: data.name,
      price:data.price,
pricetype:data.pricetype
    })
}
}else{
this.priceGrpArr1.push({
      name: "Price Group 1",
      price:"Not Entered Yet",
pricetype:"Price Type"
    })

this.priceGrpArr2.push({
      name: "Price Group 2",
      price:"Not Entered Yet",
pricetype:"Price Type"
    })

}
})
}

console.log(this.priceGrpArr1);
console.log(this.priceGrpArr2);
})
}


}
