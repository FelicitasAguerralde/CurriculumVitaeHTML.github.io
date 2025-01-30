import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Automoviles } from './automoviles-list/automoviles';
const URL='https://6382ba376e6c83b7a985c74e.mockapi.io/api/v1/automoviles';
@Injectable({
  providedIn: 'root'
})
export class AutomovilesDataService {

  constructor(private htttp: HttpClient) {}

    public getAll() : Observable<Automoviles[]> {
      //consume la api
      //es como hacer el fetch('url',{method:'GET'})
      return this.htttp.get<Automoviles[]>(URL); //devuelve el observable. 

}
}