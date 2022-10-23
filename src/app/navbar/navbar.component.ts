import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../services/api.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PricemodalComponent } from '../pricemodal/pricemodal.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 displayedColumns: string[] = ['id', 'Name','no', 'DefaultPriceConcessionName','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

public showspiner=false;
  constructor(private api:ApiService,public dialog: MatDialog) {

  }

  ngOnInit(): void {
this.showspiner=true;
this.api.getItemData();
this.getAllItems();
this.dataSource = new MatTableDataSource();
 this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

showprice(id:any,name:any,userid:any){
    this.dialog.open(PricemodalComponent, {
      
      data: {
        name: name,
DefaultPriceConcessionId:id,
userid:userid
      },

    });
  }

getAllItems(){


this.api.getProductListener()
.subscribe(res=>{
this.showspiner=false;
console.log(res);
this.dataSource = new MatTableDataSource(res);
})
}

}
/** Builds and returns a new User. */



