import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ProductsService} from '../../services/products.service';
import { DebugElement } from "@angular/core";
import { Tab2Page } from './tab2.page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule, By } from '@angular/platform-browser';
import { MatTableDataSource, MatTableModule } from '@angular/material';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {userData} from '../../modals/data.modal';
import { DataSource } from '@angular/cdk/table';
// import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let de: DebugElement;
  let el: HTMLElement;
  // let testUsers: userData[] = [
  //   {id:'1',name:'Test1',email:'test1@example.com"','age': 26,},
  //   {id:'2',name:'Test2',email:'test2@example.com"','age': 27},
  //   {id:'3',name:'Test3',email:'test3@example.com"','age': 28},
    // {id: '4', name: 'Test4', email: 'test4@example.com"', age: 29  },
    // {id: '5', name: 'Test5', email: 'test5@example.com"', age: 30  },
    // {id: '6', name: 'Test6', email: 'test6@example.com"', age: 31  },
    // {id: '7', name: 'Test7', email: 'test7@example.com"', age: 32  },
    // {id: '8', name: 'Test8', email: 'test8@example.com"', age: 33  },
    // {id: '9', name: 'Test9', email: 'test9@example.com"', age: 34  },
    // {id: '10', name: 'Test10', email: 'test10@example.com"', age:35 }
//  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        MatTableModule,
        HttpClientModule,
        MatDialogModule,
    ],
    providers: [
      ProductsService,
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} },

      // { provide: MatDialogModule, useValue: {} }
  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
    de = null;
    el = null;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call open add Dialog', async() =>  {

    let button = fixture.debugElement.nativeElement.querySelector('button');
     button.click();

     fixture.whenStable().then(() => {
       expect(component.addNew).toHaveBeenCalled();
     });
}); 

it('should call open edit Dialog', async() =>  {

  let button = fixture.debugElement.nativeElement.querySelector('button');
   button.click();

   fixture.whenStable().then(() => {
     expect(component.editItem).toHaveBeenCalled();
   });
}); 

it('should call open  delete Dialog', async() =>  {

  let button = fixture.debugElement.nativeElement.querySelector('button');
   button.click();

   fixture.whenStable().then(() => {
     expect(component.deleteItem).toHaveBeenCalled();
   });
}); 
});
