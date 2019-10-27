import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  category;
  transaction;
  price;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/purchase').subscribe(data => {
      this.category = data.category;
      this.price = data.price;
      this.transaction = data.transaction;
      console.log(this.category, this.price, this.transaction);
    })
  }

}
