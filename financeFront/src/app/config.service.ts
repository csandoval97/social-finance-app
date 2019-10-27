import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUri = 'localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getOrder(){
    this.httpClient.get(this.baseUri+'/home/saving').subscribe((data) => console.log(JSON.stringify(data) ) );
  }
  
}
