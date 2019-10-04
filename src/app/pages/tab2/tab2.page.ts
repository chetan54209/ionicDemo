import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTableModule, MatSort } from '@angular/material';
import {HttpClient} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditmodalComponent } from 'src/app/dialog/editmodal/editmodal.component';
import { DeletemodalComponent } from 'src/app/dialog/deletemodal/deletemodal.component';
import { AddmodalComponent } from 'src/app/dialog/addmodal/addmodal.component';
import { DataSource } from '@angular/cdk/table';
import {userData} from '../../modals/data.modal'
import {ProductsService} from '../../services/products.service';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'age', 'actions'];
  dataSource: MatTableDataSource<userData>;
  user: userData[] =[];
  
  
  constructor(public http: HttpClient, public productService: ProductsService,  public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<userData>(this.user);
   }

  ngOnInit() {
    this.productService.getAllUsers()
    .subscribe(
      data =>{
this.user = data
console.log(this.user);
this.dataSource = new MatTableDataSource(this.user);
console.log(this.dataSource);

});
    }
 
    addNew(){
const dialogRef= this.dialog.open(AddmodalComponent);
  }

  editItem(
    name:string,
    email:string,
    age:number){
    const dialogRef = this.dialog.open(EditmodalComponent,{
      data: {
        name: name,
      email: email,
      age: age,
      }
    });
  }
  deleteItem(id:string,
    name:string,
    email:string,
    age:number){
      const dialogRef = this.dialog.open(DeletemodalComponent,{
        data: {
          id: id,
          name: name,
        email: email,
        age: age,
        }
      });
  }
}
