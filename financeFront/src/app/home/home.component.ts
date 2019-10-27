import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pieChartLabels;//= getLabel()
  public pieChartData; // = getData()
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
    
  }


}
