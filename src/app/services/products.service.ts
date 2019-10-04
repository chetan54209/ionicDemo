import { Injectable } from '@angular/core';
import { userData } from '../modals/data.modal';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  
  getAllUsers():Observable<userData[]> {
return this.http.get<userData[]>('assets/data/data.json');
   }

   
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
}
