import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'
import { config } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pieChartLabels = ['hello', 'world', 'welcome','home']//= getLabel()
  public pieChartData = [10,20,30,40]; // = getData()
  public pieChartType = 'pie';

  tempVar = {};

  constructor() { }

  ngOnInit() {
  }


}
