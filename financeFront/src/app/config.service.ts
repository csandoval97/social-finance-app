import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUri = 'localhost:3000';
  constructor(private httpClient: HttpClient) { }

  public getOrder(){
    return this.httpClient.get(this.baseUri+'/home/saving',{headers:headers}).pipe(map(res=>res));
  }
  
}
