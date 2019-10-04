import { Component, OnInit } from '@angular/core';
import {userData} from '../../modals/data.modal';
import {DataService} from '../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {
  datas;
//   displayedColumns: string[] = ['id', 'name', 'email', 'age', 'actions'];
// data: Data [];
// dataSource: MatTableDataSource<Data>;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.all().subscribe(res => {
      this.datas = res;
    });
    // this.data = this.dataService.getAllData();
    // this.filterDeployments();
    
  }
  // filterDeployments() {
  //   this.dataSource = new MatTableDataSource(this.data);
  // }

}
