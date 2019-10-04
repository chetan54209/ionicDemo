import { Injectable } from '@angular/core';
import {userData} from '../modals/data.modal';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   data: any[] = [
    {
      id: '1',
      name: 'Test1',
      email: "test1@example.com",
      age: 26
    },
    {
      id: "2",
      name: "Test2",
      email: "test2@example.com",
      age: 27
    },
    {
      id: "3",
      name: "Test3",
      email: "test3@example.com",
      age: 28
    }
   ]
  
  constructor() { 
    // this.data = [
    //   {
    //     id: '1',
    //     name: 'test1',
    //     email: "test1@example.com",
    //     age: 26
    //   },
    //   {
    //     id: "2",
    //     name: "Test2",
    //     email: "test2@example.com",
    //     age: 27
    //   },
    //   {
    //     id: "3",
    //     name: "Test3",
    //     email: "test3@example.com",
    //     age: 28
    //   }
     
    // ];
  }

  all(): Observable<Array<object>> {
    return of(this.data);
  }
}
