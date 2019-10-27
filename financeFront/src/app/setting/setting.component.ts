import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  loanNum = 0;
  constructor() { }
  setLoanCounter(num){
    this.loanNum = num;
    console.log(this.loanNum);
  }
  ngOnInit() {
  }

}
