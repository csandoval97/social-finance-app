import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pieChartLabels = ['hello', 'world', 'welcome','home'];
  public pieChartData = [10,20,30,40];
  public pieChartLabels2 = ['a','b','c','d','e','f','g','e','f','g'];
  public pieChartData2 = [1,2,3,4,5,6,7,8,9,10];
  public pieChartLabels3 = ['a','b','c','d','e','f','g','e','f','g'];
  public pieChartData3 = [1,2,3,4,5,6,7,8,9,10];
  public pieChartType = 'pie';

  tempVar = {};
  totalAngularPackages;
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/home/saving').subscribe(data => {
      this.pieChartLabels=data.name;
      this.pieChartData=data.value;
    })
    this.http.get<any>('http://localhost:3000/home/credit').subscribe(data => {
      this.pieChartLabels2=data.name;
      this.pieChartData2=data.value;
    })
    this.http.get<any>('http://localhost:3000/home/loan').subscribe(data => {
      this.pieChartLabels3=data.name;
      this.pieChartData3=data.value;
    })
  }


}
