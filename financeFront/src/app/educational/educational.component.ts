import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit {
  myNum = 0;
  myNum1 = 0;
  constructor() { }
  setCounter(num){
   this.myNum = num;
   console.log(this.myNum);
 }
 setCounter1(num1){
  this.myNum1 = num1;
  console.log(this.myNum1);
}
  ngOnInit() {
  }

}
